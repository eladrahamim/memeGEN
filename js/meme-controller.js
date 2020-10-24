'use strict';

var gCanvas;
var gCtx;
var gImgId = 1;
var gLineId = 1;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderImgs();
}

function onSetStrokeColor(color) {
    setStrokeColor(color);
}

function onSetAlign(ev, val) {
ev.preventDefault();
setAlign(val);
}

function onAddTextLine(ev) {
    ev.preventDefault();
    // addLine();
    var elForm = document.querySelector('form')
    elForm.innerHTML += `<input type="text" placeholder="Text line" id="${gLineId}" onfocus="onLineFocus(this.id)" oninput="onTextChange(this)">`;
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
    setLinePosition('-');
}

function onMoveLineUp(ev) {
    ev.preventDefault();
    setLinePosition('+');
}

function onImgClicked(elImg) {
    document.querySelector('.meme-editor').style.display = 'block';
    document.querySelector('.img-gallery').style.display = 'none';
    setImg(elImg);
    resetLines();
    drawImg();
}

function drawText(line) {
    gCtx.strokeStyle = line.stroke;
    gCtx.fillStyle = 'white';
    const text = line.txt;
    gCtx.lineWidth = '2';
    gCtx.font = `${line.size}px Impact`;
    gCtx.textAlign = line.align;
    gCtx.fillText(text, line.x, line.y);
    gCtx.strokeText(text, line.x, line.y);
}

function onLineFocus(id) {
    setSelectedLine(id);
}

function onTextChange(elInput) {
    setLine(elInput.value, elInput.id);
}

function drawImg() {
    var img = new Image()
    img.src = getImgSrc();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        const lines = getLines();
        lines.forEach(line => drawText(line));
    }
}

function renderImgs() {
    var imgs = getImgs()
    var strHtmls = imgs.map(function (img) {
        return `
                <img class="image" id="${img.id}" src="${img.url}" alt="" onclick="onImgClicked(this)">
            `
    })
    document.querySelector('.img-gallery').innerHTML = strHtmls.join('');
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}
// function place(ev) {console.log(ev);}
