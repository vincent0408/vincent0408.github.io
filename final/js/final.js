var canvas, ctx, divScore, divLevel, centerX, centerY, radius, score, level, particles;
const playFor = 60;
const numparticles = 120;



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
level = 1;
particles = []

const center = {
    x: centerX,
    y: centerY
};

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


var globalTime; //as time is important make a global for it
var startTime; // we need to have a referance point

function mainLoop(time) {
    if (startTime === undefined) {
        startTime = time;
    }
    globalTime = time - startTime; // set time
    updateAll(); // call the main logic

    requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
window.addEventListener('resize', resizeHandler);

function setup() {

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
            Math.random() * (playFor - 1) * 1000, // get time to start box
            {
                x: px,
                y: py
            },
            Math.random() * 5 * 100 + 1000, // play for over 1 sec less than 6
            Math.floor(Math.random() * 10 + 10),
            Math.floor(Math.random() * 10 + 15).toString() + "pt Calibri",
            String.fromCharCode(Math.random() * 26 + 97),
            Math.floor(Math.random() * 150 + 100)

        );
    }
    particles.sort((a, b) => parseFloat(a.when) - parseFloat(b.when));
}



setup(); // make some random particles

function updateAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the screen
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
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

            if (data.distance >= 20) { // not at end yet 
                //pos /= par.len; // normalize time pos
                // pos = (par.where.y - (-200 / 2)) * pos; // distance to past the top
                par.where.x += toCenterVector.magnitudeX * pos / 1000000;
                par.where.y += toCenterVector.magnitudeY * pos / 1000000;

                // now draw the box;
                //ctx.fillRect(par.where.x, par.where.y, boxSize, boxSize);
                //ctx.translate(par.where.x, par.where.y);
                //ctx.save();
                ctx.beginPath();
                //ctx.translate(par.where.x, par.where.y);

                //ctx.arc(par.where.x, par.where.y, par.radius, 0, 2 * Math.PI);
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "black";
                ctx.font = par.font;
                ctx.fillText(par.letter, par.where.x, par.where.y);
                //ctx.stroke();

            } else { // box has reached the end dont need it no more
                // any last words Box!!
                particles.splice(i, 1); // Bang
                i -= 1; // clean up the loop counter
                alert("You Lose!");
                document.location.href("");
                //gameOver();
            }
        }
    }
    if (particles.length == 0) { //no more particles so add more
        setup();
        startTime = undefined; // reset start time for new particles.
    }
    ctx.save();


}

var isPressed = false;

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

    //divScore.textContent = e.keyCode;
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
    // ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the screen
    // ctx.fillStyle = "#fffbc8";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function refreshScore(amount) {
    score += amount;
}

function gameOver() {
    document.removeEventListener('keydown', keyDownHandler);
    document.removeEventListener('keyup', keyUpHandler);
    window.removeEventListener('resize', resizeHandler);

}

function resetGlobalVariaables() {
    score = 0;
    level = 1;
    particles = []
}

// function generateParticle() {

//     var now = performance.now();
//     var elapsed = now - lastTime;
//     lastTime = now;
//     if (particleCount <= 20) {
//         if (tick % 10 == 0) {
//             particle = new Particle();
//             particles.push(particle);
//             //moveParticles(elapsed);
//             createParticle(particle);
//             particleCount++;
//         }
//     }
//     for (i = 0; i < particles.length; i++) {

//         divScore.textContent = particles[0].x + " " + particles[0].y;
//         var data = distanceAndAngleBetweenTwoPoints(particles[i].x, particles[i].y, center.x, center.y);
//         var toCenterVector = new Vector(particles[i].velocity, data.angle);
//         particles[i].x += toCenterVector.magnitudeX * elapsed;
//         particles[i].y += toCenterVector.magnitudeY * elapsed;
//         createParticle(particles[i]);
//     }
//     tick++;

//     requestAnimationFrame(generateParticle);
// }



// function createParticle(p) {
//     ctx.save();
//     ctx.beginPath();
//     ctx.translate(p.x, p.y);
//     ctx.arc(0, 0, p.radius, 0, 2 * Math.PI);
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillStyle = "black";
//     ctx.font = p.font;
//     ctx.fillText(p.letter, 0, 0);
//     ctx.restore();
// }


// function moveParticles(milliseconds) {

//     particles.forEach(function(p) {
//         var data = distanceAndAngleBetweenTwoPoints(p.x, p.y, center.x, center.y);

//         var velocity = 200;
//         var toCenterVector = new Vector(velocity, data.angle);
//         p.x += (toCenterVector.magnitudeX * elapsedSeconds);
//         p.y += (toCenterVector.magnitudeY * elapsedSeconds);
//     });
// }

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



// generateParticle();