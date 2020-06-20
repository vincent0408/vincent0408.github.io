//https://jsfiddle.net/jwcarroll/2r69j1ok/3/
window.onload = Construct();

const list = [
    [0, "A", "../image/alphabet (1).png"],
    [1, "B", "../image/alphabet (2).png"],
    [2, "C", "../image/alphabet (3).png"],
    [3, "D", "../image/alphabet (4).png"],
    [4, "E", "../image/alphabet (5).png"],
    [5, "F", "../image/alphabet (6).png"],
    [6, "G", "../image/alphabet (7).png"],
    [7, "H", "../image/alphabet (8).png"],
    [8, "I", "../image/alphabet (9).png"],
    [9, "J", "../image/alphabet (10).png"],
    [10, "K", "../image/alphabet (11).png"],
    [11, "L", "../image/alphabet (12).png"],
    [12, "M", "../image/alphabet (13).png"],
    [13, "N", "../image/alphabet (14).png"],
    [14, "O", "../image/alphabet (15).png"],
    [15, "P", "../image/alphabet (16).png"],
    [16, "Q", "../image/alphabet (17).png"],
    [17, "R", "../image/alphabet (18).png"],
    [18, "S", "../image/alphabet (19).png"],
    [19, "T", "../image/alphabet (20).png"],
    [20, "U", "../image/alphabet (21).png"],
    [21, "V", "../image/alphabet (22).png"],
    [22, "W", "../image/alphabet (23).png"],
    [23, "X", "../image/alphabet (24).png"],
    [24, "Y", "../image/alphabet (25).png"],
    [25, "Z", "../image/alphabet (26).png"]
]
var c;
var ctx;
var center = {
    x: 0,
    y: 0
};
var lastStep = 0;
var particles = [{ x: 0, y: 0 }, { x: 500, y: 500 }];







function Construct() {
    setTimeout(function() {
        c = document.getElementById("canvas");
        ctx = c.getContext("2d");
        c.addEventListener('mousedown', function(e) {
            var m = getCenterPos(c, e);
            center.x = m.x;
            center.y = m.y;
        }, false);

        window.requestAnimationFrame(animationFrame);
    }, 1);
}

function animationFrame(milliseconds) {
    var elapsed = milliseconds - lastStep;
    lastStep = milliseconds;
    render(elapsed);
    window.requestAnimationFrame(animationFrame);
}

function getCenterPos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    return {
        x: centerX,
        y: centerY
    };
}

function render(elapsed) {
    clearCanvas();
    moveParticles(elapsed);
    renderParticles();
}



function clearCanvas() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#fffbc8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.body.style.overflow = "hidden"

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 10;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}

var distanceFlag = 0;


function moveParticles(milliseconds) {

    particles.forEach(function(p) {
        var data = distanceAndAngleBetweenTwoPoints(p.x, p.y, center.x, center.y);
        ctx.font = "30px Arial";
        ctx.fillText("Level 1", 50, 50);
        ctx.fillText("Score: " + p.x, 50, 80);
        ctx.fillText(particles.length, 50, 200);


        if (data.distance > 50) {
            distanceFlag = 1;
        }
        if (distanceFlag == 1) {
            if (data.distance <= 20) {

            }
        }
        var velocity = 200;
        var toCenterVector = new Vector(velocity, data.angle);
        var elapsedSeconds = milliseconds / 1000;
        p.x += (toCenterVector.magnitudeX * elapsedSeconds);
        p.y += (toCenterVector.magnitudeY * elapsedSeconds);
    });
}

function renderParticles() {
    particles.forEach(function(p) {
        ctx.save();
        ctx.beginPath();
        ctx.translate(p.x, p.y);
        ctx.arc(0, 0, 10, 0, 2 * Math.PI);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = '15pt Calibri';
        ctx.fillStyle = "black";
        ctx.fillText("A", 0, 0);
        ctx.restore();

    });
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