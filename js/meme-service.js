'use strict';

var gId = 1;
const gImgs = [{ id: 1, url: 'img/1.jpg' }, { id: 2, url: 'img/2.jpg' }];
const gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{ txt: '' }],
    size: 48
}

function getSelectedLine() {
    var selectedLine = gMeme.selectedLineIdx;
    return selectedLine;
}

function addLine() {
    gMeme.lines.push({ txt: '' });
    console.log(gMeme.lines);
}

function getFontSize() {
    const fontSize = gMeme.size + 'px';
    console.log(fontSize);
    return fontSize;
}

function setFontSize(value) {
    gMeme.size = (value === '+') ? gMeme.size + 1 : gMeme.size - 1;
    clearCanvas();
    drawImg();
}

function setImg(elImg) {
    gMeme.selectedImgId = parseInt(elImg.id);
}

function setLine(txt, id) {
    console.log(id);
    gMeme.selectedLineIdx = id;
    gMeme.lines[id].txt = txt;
    clearCanvas();
    drawImg();
}

function getImgSrc() {
    const imgId = gMeme.selectedImgId;
    const imgSrc = gImgs.find(img => img.id === imgId).url;
    return imgSrc;
}

function getText() {
    const lineIndx = gMeme.selectedLineIdx;
    const selctedLine = gMeme.lines[lineIndx];
    const text = selctedLine.txt
    return (text);
}