var canvas, ctx, divScore, divLevel, centerX, centerY, radius, score, level, particles, center, numparticles, playFor;
var isPressed = false;
var globalTime; //as time is important make a global for it
var startTime; // we need to have a referance point
var paused = true;

var ss = StartScreen();
var sg = StartGame();
StartButton(ss, sg);

function Initial() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.style.overflow = "hidden";

    divScore = document.getElementById("score");
    divLevel = document.getElementById("level");

    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    radius = 10;
    score = 0;
    level = 0;
    numparticles = 20;
    playFor = 20;
    particles = []

    center = {
        x: centerX,
        y: centerY
    };


}

Initial();

function addParticles(when, where, howLong, radius, font, letter, velocity) {
    var par;
    particles.push(par = {
        when: when,
        where: where,
        len: howLong,
        radius: radius,
        font: font,
        letter: letter,
        velocity: velocity
    });
    return par;
}



function mainLoop(time) {
    if (startTime === undefined) {
        startTime = time;
    }
    globalTime = time - startTime; // set time
    if (!paused) {
        updateAll(); // call the main logic

    }

    requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);

function AddEL() {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    window.addEventListener('resize', resizeHandler);
}
AddEL();

function setup() {
    level++;
    numparticles = Math.floor(numparticles * Math.ceil(Math.pow(1.05, level - 1)));
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
        addParticles(
            Math.floor(Math.random() * playFor * 1000), // get time to start box
            {
                x: px,
                y: py
            },
            Math.floor(Math.random() * 10 * 100 + 1000), // play for over 1 sec less than 6
            Math.floor(Math.random() * 10 + 10),
            Math.floor(Math.random() * 10 + 15).toString() + "pt Calibri",
            String.fromCharCode(Math.random() * 26 + 97),
            Math.floor(Math.random() * 150 + 50)

        );
    }
    particles.sort((a, b) => parseFloat(a.when) - parseFloat(b.when));
}



setup(); // make some random particles

function updateAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the screen
    // ctx.beginPath();
    // ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'green';
    // ctx.fill();
    divScore.textContent = "Score: " + score;
    divLevel.textContent = "Level: " + level;

    // iterate box array and check for new starts
    for (var i = 0; i < particles.length; i++) {
        var par = particles[i];
        if (!par.moving) { // is box not moving ???
            // check th time
            if (par.when < globalTime) { // it needs to start
                par.moving = true; // flag it to move
            }
        }
        if (par.moving) { // move particles that need it
            var pos = globalTime - par.when; // get pos in time
            var data = distanceAndAngleBetweenTwoPoints(par.where.x, par.where.y, center.x, center.y);
            var velocity = 200
            var toCenterVector = new Vector(velocity, data.angle);

            if (data.distance >= 35) { // not at end yet 
                //pos /= par.len; // normalize time pos
                // pos = (par.where.y - (-200 / 2)) * pos; // distance to past the top
                par.where.x += toCenterVector.magnitudeX * pos / 500000 * Math.pow(1.05, level - 1);
                par.where.y += toCenterVector.magnitudeY * pos / 500000 * Math.pow(1.05, level - 1);

                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "white";
                ctx.font = par.font;
                ctx.fillText(par.letter, par.where.x, par.where.y);
                ctx.beginPath();
                ctx.arc(par.where.x, par.where.y, par.radius, 0, 2 * Math.PI, false);
                ctx.strokeStyle = "white";
                ctx.stroke();

            } else {
                particles.splice(i, 1);
                gameOver();
                var ss = SelectionScreen();
                var rb = ReturnButton();
                var mf = MissionFailed();
                RestartButton(ss, mf, rb);
                // alert("You Lose!");
                paused = true;

            }
        }
    }
    if (particles.length == 0) { //no more particles so add more
        setup();

        startTime = undefined; // reset start time for new particles.
    }
    ctx.save();


}



function keyDownHandler(e) {
    var correctLetter = false;
    isPressed = true;
    for (let i = 0; i < particles.length; i++) {
        if (isPressed) {
            if (particles[i].letter.charCodeAt(0) == e.keyCode + 32 && particles[i].moving == true) {
                correctLetter = true;
                particles.splice(i, 1);
                refreshScore(1);
                break;
            }
        }
    }
    if (isPressed) {
        if (!correctLetter) {
            refreshScore(-1);

        }
    }

}

function keyUpHandler(e) {
    isPressed = false;
    correctLetter = false;
}

function resizeHandler() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    center.x = canvas.width / 2;
    center.y = canvas.height / 2;
}

function refreshScore(amount) {
    score += amount;
}

function RemoveEL() {
    document.removeEventListener('keydown', keyDownHandler);
    document.removeEventListener('keyup', keyUpHandler);
    window.removeEventListener('resize', resizeHandler);
}

function gameOver() {
    RemoveEL();
    Initial();
    AddEL();

}

function StartScreen() {
    var start = document.createElement("canvas");
    start.className = "start";
    start.width = window.innerWidth;
    start.height = window.innerHeight;
    document.getElementById("container").appendChild(start);
    var ctx = start.getContext("2d");
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, start.width, start.height);
    return start;
}

function StartGame() {
    var game = document.createElement("div");
    game.className = "defender";
    game.innerHTML = "Earth Defender";
    document.getElementById("container").appendChild(game);
    return game;
}

function StartButton(startScreen, startGame) {
    var startButton = document.createElement("button");
    startButton.className = "startButton";
    startButton.innerHTML = "Start";
    startButton.onclick = function() {
        paused = false;
        startScreen.remove();
        startGame.remove();
        startButton.remove();
        Initial();
    };
    document.getElementById("container").appendChild(startButton);
}

function SelectionScreen() {
    var select = document.createElement("canvas");
    select.className = "select";
    select.width = window.innerWidth;
    select.height = window.innerHeight;

    document.getElementById("container").appendChild(select);
    var ctx = select.getContext("2d");
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, select.width, select.height);
    return select;
}

function ReturnButton() {
    var returnButton = document.createElement("button");
    returnButton.className = "returnButton";
    returnButton.innerHTML = "Return";
    returnButton.onclick = function() {
        window.location = "./index.html";
    }
    document.getElementById("container").appendChild(returnButton);
    return returnButton;
}

function RestartButton(select, mission, returnButton) {
    var restartButton = document.createElement("button");
    restartButton.className = "restartButton";
    restartButton.innerHTML = "Restart";
    restartButton.onclick = function() {
        paused = false;
        select.remove();
        mission.remove();
        returnButton.remove();
        restartButton.remove();
        Initial();
    };
    document.getElementById("container").appendChild(restartButton);
}

function MissionFailed() {
    var mission = document.createElement("div");
    mission.className = "mission";
    mission.innerHTML = "Mission Failed"
    document.getElementById("container").appendChild(mission);
    return mission;
}

function distanceAndAngleBetweenTwoPoints(x1, y1, x2, y2) {
    var x = x2 - x1,
        y = y2 - y1;

    return {
        // x^2 + y^2 = r^2
        distance: Math.sqrt(x * x + y * y),

        // convert from radians to degrees
        angle: Math.atan2(y, x) * 180 / Math.PI
    }
}

function Vector(magnitude, angle) {
    var angleRadians = (angle * Math.PI) / 180;

    this.magnitudeX = magnitude * Math.cos(angleRadians);
    this.magnitudeY = magnitude * Math.sin(angleRadians);
}