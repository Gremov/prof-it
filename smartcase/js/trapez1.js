var c = document.getElementById("trapez1-hor");
var ctx = c.getContext("2d");
ctx.lineWidth=5;
ctx.strokeStyle = "#f02b56";

ctx.moveTo(2,145); /*init position*/
ctx.lineTo(34,0); /*x 200, y 0*/
// ctx.stroke();
ctx.moveTo(265,2); /*x 200, y 0*/
ctx.lineTo(34,2); /*x 200, y 0*/
// ctx.stroke();
// ctx.moveTo(265,2); /*x 200, y 0*/
// ctx.lineTo(200,2); /*x 200, y 0*/

ctx.moveTo(265,0); /*x 200, y 0*/
ctx.lineTo(300,145); /*x 200, y 100*/
// ctx.stroke();

ctx.moveTo(0,145); /*x 200, y 0*/
ctx.lineTo(300,145); /*x 200, y 100*/

ctx.stroke();