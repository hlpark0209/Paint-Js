'use strict';
const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#000000";
ctx.lineWidth = 2.5;


let painting = false;

// 그리기 중지
function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
}

// 마우스가 움직일때
function onMouseMove(e){
    const x = e.offsetX;
    const y = e.offsetY;
    
    // path를 생성함 -> 선으로 시작점을 만듦, 클릭을 했을때는 path가 종료
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

// 클릭했을때 
function onMouseDown(e){
    painting = true;
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}