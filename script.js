'use strict';
const canvas = document.querySelector('#jsCanvas');
let painting = false;

// 그리기 중지
function stopPainting(){
    painting = false;
}

// 마우스가 움직일때
function onMouseMove(e){
    const x = e.offsetX;
    const y = e.offsetY;
    // console.log(x, y);
}

// 클릭했을때 
function onMouseDown(e){
    painting = true;
}

// 클릭을 땠을떄
function onMouseUp(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}