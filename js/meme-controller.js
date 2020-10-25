'use strict';

var gCanvas;
var gCtx;
var gImgId = 1;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery();
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onSwitchLines(ev) {
    ev.preventDefault();
    const txt = switchLines();
    document.querySelector('.text-line').value = txt;
}

function onSetFont(val) {
    setFont(val);
    drawImg();
}

function onDeleteLine(ev) {
    ev.preventDefault();
    deleteLine();
    document.querySelector('.text-line').value = '';
    drawImg();
}

function onSetFillColor(color) {
    setFillColor(color);
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
    addLine();
    document.querySelector('.text-line').value = '';
    drawImg();
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
    document.querySelector('.main-content').style.display = 'none';
    setImg(elImg);
    resetLines();
    drawImg();
}

function drawLine(line) {
    gCtx.strokeStyle = line.stroke;
    gCtx.fillStyle = line.fill;
    const text = line.txt;
    gCtx.lineWidth = '2';
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.textAlign = line.align;
    gCtx.fillText(text, line.x, line.y);
    gCtx.strokeText(text, line.x, line.y);
}

function onLineFocus(id) {
    setSelectedLine(id);
}

function onTextChange(txt) {
    setTxt(txt);
    drawImg();
}

function drawImg() {
    var img = new Image()
    img.src = getImgSrc();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        const lines = getLines();
        lines.forEach(line => drawLine(line));
    }
}

function renderGallery() {
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
