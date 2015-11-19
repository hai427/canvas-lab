/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/
var eraser = false;

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    var mouseClicked = false;

    document.addEventListener('mousedown', function(evt) {
        ctx.beginPath();
        var canvasY = evt.clientY - canvas.offsetTop;
        var canvasX = evt.clientX - canvas.offsetLeft;
        ctx.moveTo(canvasX, canvasY);
        mouseClicked = true;
    });

    document.addEventListener('mousemove', function(evt) {
        var canvasY = evt.clientY - canvas.offsetTop;
        var canvasX = evt.clientX - canvas.offsetLeft;

        var color = document.getElementById('line-color-inp').value;
        ctx.strokeStyle = color;

        var width = document.getElementById('stroke-width-inp').value;
        ctx.lineWidth = width;

        if(mouseClicked) {
            if (eraser) {
                ctx.clearRect(canvasX, canvasY, width, width);
            } else {
                ctx.lineTo(canvasX, canvasY);
                ctx.stroke();
            }
        }
    });

    document.addEventListener('mouseup', function(evt) {
        mouseClicked = false;
    });

}); //DOMContentLoaded

function erase() {
    eraser = !eraser;
};