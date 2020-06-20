var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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
ctx.stroke();