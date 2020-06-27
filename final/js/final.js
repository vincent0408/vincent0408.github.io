var canvas, ctx, divScore, divLevel, divLives, radius, score, level, lives,
    particles, center, numparticles, playFor, addLifeFlag, minScorevar, globalTime, startTime;
var isPressed = false;
var paused = true;

// Create start menu
function PageLoad() {
    var ss = StartScreen();
    var sg = StartGameTitle();
    StartButton(ss, sg);
}

PageLoad();

// Initialize global variables
function Initial() {
    canvas = $("#canvas")[0];
    ctx = canvas.getContext('2d');
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    $("body").css({ "overflow": "hidden" });

    divScore = $("#score")[0];
    divLevel = $("#level")[0];
    divLives = $("#lives")[0];

    radius = 10;
    score = 0;
    level = 0;
    lives = 1;
    numparticles = 20;
    playFor = 20;
    addLifeFlag = false;
    minScore = -1;
    particles = []

    center = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };
}

Initial();


// Create letetr particles
function AddParticles(when, where, howLong, radius, font, letter, velocity, asteroid) {
    var par;

    // Create letter particles list
    particles.push(par = {
        when: when,
        where: where,
        len: howLong,
        radius: radius,
        font: font,
        letter: letter,
        velocity: velocity,
        asteroid: asteroid
    });
    return par;
}


// Main game loop
function MainLoop(time) {
    if (startTime == undefined) {
        startTime = time;
    }
    globalTime = time - startTime;
    if (!paused) {
        UpdateAll();
    }
    requestAnimationFrame(MainLoop);
}
requestAnimationFrame(MainLoop);


function AddEventListener() {
    $(document).keydown(KeyDownHandler);
    $(document).keyup(KeyUpHandler);
}
AddEventListener();

function Setup() {

    // Add level everytime setup is called
    level++;

    // Initial particle amount
    numparticles = Math.floor(numparticles * Math.pow(1.05, level - 1));

    // The interval of time the particles should be generated in 
    playFor *= Math.pow(1.03, level - 1);

    for (var i = 0; i < numparticles; i++) {
        var px, py;
        fromNSWE = Math.floor(Math.random() * 4);
        // 0:N, 1:S, 2:W, 3:E

        if (fromNSWE == 0) {
            px = Math.floor(Math.random() * canvas.width);
            py = 0;
        } else if (fromNSWE == 1) {
            px = Math.floor(Math.random() * canvas.width);
            py = canvas.height;
        } else if (fromNSWE == 2) {
            px = 0;
            py = Math.floor(Math.random() * canvas.height);
        } else if (fromNSWE == 3) {
            px = canvas.width;
            py = Math.floor(Math.random() * canvas.height);
        }
        var radius = Math.floor(Math.random() * 8 + 15);

        // Create asteroid image
        var asteroid = $("<img />", {
            "src": "./image/asteroid_gray.png",
            id: "asteroid",
            css: {
                left: (px.toString() + "px"),
                top: (py.toString() + "px"),
                display: "none"
            }

        });
        asteroid.css("width", (radius / asteroid.prop("naturalWidth") * 100).toString() + "%");
        $(document.body).append(asteroid);

        AddParticles(
            Math.floor(Math.random() * playFor * 1000), {
                x: px,
                y: py
            },
            Math.floor(Math.random() * 10 * 100 + 1000),
            radius,
            (radius - 0.5).toString() + "pt Roboto",
            String.fromCharCode(Math.random() * 26 + 65),
            Math.floor(Math.random() * 150 + 50),
            asteroid
        );
    }
    // Sort ascending by time, so that the letters disppear from those appeared first
    particles.sort((a, b) => parseFloat(a.when) - parseFloat(b.when));
}

Setup();

function UpdateAll() {
    // Refresh canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add lives when score is the multiple of 50
    // Make sure it does not re-add if we typed wrong and the score is the multiple of 50 again
    if (score > minScore) {
        minScore = score;
    }
    if (score % 50 == 49 && score == minScore) {
        addLifeFlag = true;
    }
    if (addLifeFlag && score % 50 == 0) {
        lives++;
        addLifeFlag = false;
    }

    // Print level, score, lives on screen
    divLevel.textContent = "Level " + level;
    divScore.textContent = "Score " + score;
    divLives.textContent = "Lives " + lives;

    for (var i = 0; i < particles.length; i++) {
        var par = particles[i];

        // Check if it is time for par to be active
        if (!par.moving) {
            if (par.when < globalTime) {
                par.moving = true;
            }
        }


        if (par.moving) {

            // Get time elapsed after par activates
            var pos = globalTime - par.when;

            // Get vector to center 
            var data = DistanceBetweenTwoPoints(par.where.x, par.where.y, center.x, center.y);
            var velocity = 200
            var toCenterVector = new ReturnVector(velocity, data.angle);

            // Show asteroid
            par.asteroid.css("display", 'inline-block');

            // Calculate distance between center point
            if (data.distance >= 35) {

                // Move asteroids
                par.where.x += toCenterVector.magnitudeX * pos / 500000 * Math.pow(1.01, level - 1);
                par.where.y += toCenterVector.magnitudeY * pos / 500000 * Math.pow(1.01, level - 1);
                par.asteroid.css("left", (par.where.x - (par.asteroid.width() / 2)).toString() + "px");
                par.asteroid.css("top", (par.where.y - (par.asteroid.height() / 2.3)).toString() + "px");

                // Move letter particles
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.strokeStyle = "#888";
                ctx.lineWidth = 5;
                ctx.strokeText(par.letter, par.where.x, par.where.y);
                ctx.fillStyle = "white";
                ctx.font = par.font;
                ctx.fillText(par.letter, par.where.x, par.where.y);

            } else {

                // If distance is less than 35(radius of the Earth), destroy asteroid and minus one life
                par.asteroid.remove();
                particles.splice(i, 1);
                lives--;

                // Gameover when lives reach 0
                if (lives == 0) {
                    GameOver();
                    var ss = SelectionScreen();
                    var rb = ReturnButton();
                    var mf = MissionFailed();
                    RestartButton(ss, mf, rb);
                    paused = true;
                }
            }
        }
    }

    // Initial particles when one level is finished
    if (particles.length == 0) {
        Setup();
        startTime = undefined;
    }
}


// Get input key, add points when the corresponding letter asteroid is active
function KeyDownHandler(e) {
    var correctLetter = false;
    isPressed = true;
    for (let i = 0; i < particles.length; i++) {
        if (isPressed) {
            if (particles[i].letter.charCodeAt(0) == e.keyCode && particles[i].moving == true) {
                correctLetter = true;
                particles[i].asteroid.remove();
                particles.splice(i, 1);
                RefreshScore(1);
                break;
            }
        }
    }
    // Minus points if typed the wrong key
    if (isPressed) {
        if (!correctLetter) {
            RefreshScore(-1);
        }
    }
}

// Make sure key press is only recognized one time
function KeyUpHandler(e) {
    isPressed = false;
    correctLetter = false;
}


function RefreshScore(amount) {
    score += amount;
}

function RemoveEventListener() {
    $(document).off("keydown", KeyDownHandler);
    $(document).off("keyup", KeyUpHandler);
}

// Reset global variable and event listeners
function GameOver() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].asteroid.remove();
    }
    RemoveEventListener();
    Initial();
    AddEventListener();
}

// Create start screen
function StartScreen() {
    var start = $("<canvas/>", { class: "start" })[0];
    start.width = $(window).width();
    start.height = $(window).height();
    $("#container").append(start);
    var ctx = start.getContext("2d");
    ctx.globalAlpha = 0.6;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, start.width, start.height);
    return start;
}

// Start game title
function StartGameTitle() {
    var title = $("<div/>", { class: "defender", text: "Earth Defender" });
    $("#container").append(title);
    return title;
}

// Start game button
function StartButton(startScreen, startGame) {
    var startButton = $("<button/>", { class: "startButton", text: "Start" });
    $(document).on('click', '.startButton', function() {
        paused = false;
        startScreen.remove();
        startGame.remove();
        startButton.remove();
        Initial();
    });
    $("#container").append(startButton);
}

// Create selection screen
function SelectionScreen() {
    var select = $("<canvas/>", { class: "select" })[0];
    select.width = $(window).width();
    select.height = $(window).height();

    $("#container").append(select);
    var ctx = select.getContext("2d");
    ctx.globalAlpha = 0.6;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, select.width, select.height);
    return select;
}

// Create return button
function ReturnButton() {
    var returnButton = $("<button/>", { class: "returnButton", text: "Return" });
    $(document).on('click', '.returnButton', function() {
        window.location = "./index.html";
    });
    $("#container").append(returnButton);
    return returnButton;
}

// Create restart button
function RestartButton(select, mission, returnButton) {
    var restartButton = $("<button/>", { class: "restartButton", text: "Restart" });
    $(document).on('click', '.restartButton', function() {
        paused = false;
        select.remove();
        mission.remove();
        returnButton.remove();
        restartButton.remove();
        Initial();
    });
    $("#container").append(restartButton);
}

// Selection screen title
function MissionFailed() {
    var mission = $("<div/>", { class: "mission", text: "Mission Failed" });
    $("#container").append(mission);
    return mission;
}

// Calculate distance
function DistanceBetweenTwoPoints(x1, y1, x2, y2) {
    var x = x2 - x1,
        y = y2 - y1;

    return {
        distance: Math.sqrt(x * x + y * y),

        angle: Math.atan2(y, x) * 180 / Math.PI
    }
}

function ReturnVector(magnitude, angle) {
    var angleRadians = (angle * Math.PI) / 180;
    this.magnitudeX = magnitude * Math.cos(angleRadians);
    this.magnitudeY = magnitude * Math.sin(angleRadians);
}