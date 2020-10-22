'use strict';

var gCanvas;
var gCtx;
var gTextPos = [{ x: 250, y: 65 }, {x: 250, y: 435}];
var gLineId = 1;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
}

function onAddTextLine(ev) {
    ev.preventDefault();
    addLine();
    var elForm = document.querySelector('form')
    elForm.innerHTML += `<input type="text" placeholder="Text line" id="${gLineId}" oninput="onTextChange(this)">`;
    gLineId++;
}

function onDecreaseFontSize(ev) {
    ev.preventDefault();
    setFontSize('-');
}

function onIncreaseFontSize(ev) {
    ev.preventDefault();
    setFontSize('+');
}

function onMoveLineDown(ev) {
    ev.preventDefault();
    gTextPos.y++;
    clearCanvas();
    drawImg();
}

function onMoveLineUp(ev) {
    ev.preventDefault();
    gTextPos.y--;
    clearCanvas();
    drawImg();
}

function onImgClicked(elImg) {
    clearCanvas();
    setImg(elImg);
    drawImg();
}

function drawText() {
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    const text = getText();
    gCtx.lineWidth = '2';
    const fontSize = getFontSize();
    gCtx.font = `${fontSize} Impact`;
    gCtx.textAlign = 'center';
    const selectedLine = getSelectedLine();
    console.log(gTextPos[selectedLine].x);
    gCtx.fillText(text, gTextPos[selectedLine].x, gTextPos[selectedLine].y);
    gCtx.strokeText(text, gTextPos.x, gTextPos.y);
}

function drawImg() {
    var img = new Image()
    img.src = getImgSrc();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText();
    }
}

function onTextChange(elInput) {
    console.log(elInput);
    setLine(elInput.value, elInput.id);
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

// function place(ev) {console.log(ev);}
