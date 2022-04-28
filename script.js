 /* Students: Please use this week's project for Week 11: Assignment 9: Basic Data Visualization. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
"use strict"
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;






var c=document.getElementById("c1");
c.width = winWidth;
c.height = winHeight;
var drawing = c.getContext('2d');
drawing.moveTo(0,0);
drawing.lineTo(200,100);
drawing.moveTo(20,11);
drawing.lineTo(40,400);
drawing.moveTo(0,0);
drawing.lineTo(300,150);
drawing.moveTo(30,100);
drawing.lineTo(200,100);
drawing.lineWidth = 8;
drawing.strokeStyle = "green";
drawing.stroke();

var cx=document.getElementById("cx");
cx.width = winWidth;
cx.height = winHeight;
var drawing1 = cx.getContext('2d');
 
  //cx.beginPath();
  drawing1.moveTo(500, 90);
  // control=(60,10) goal=(90,90)
  drawing1.quadraticCurveTo(60, 10, 180, 180);
  drawing1.lineTo(60, 10);
  drawing1.closePath();
  drawing1.stroke();

