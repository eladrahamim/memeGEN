'use strict';

var gId = 1;
const gImgs = [];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 48,
            x: 250,
            y: 65,
            align: 'center',
            stroke: 'ffffff'
        },
        {
            txt: '',
            size: 48,
            x: 250,
            y: 435,
            align: 'center',
            stroke: 'ffffff'
        }
    ]
}

function setStrokeColor(color) {
    const selectedLine = getSelectedLine();
    console.log(selectedLine);
    selectedLine.stroke = color;
    if (selectedLine.txt) drawImg();
}

function setAlign(val) {
    const selectedLine = getSelectedLine();
    selectedLine.align = val;
    switch (val) {
        case 'start':
            selectedLine.x = 50;
            break;
        case 'center':
            selectedLine.x = 250;
            break;
        case 'end':
            selectedLine.x = 450;
            break;
    }
    if (selectedLine.txt) drawImg();
}

function getSelectedLine() {
    const selectedLineIdx = gMeme.selectedLineIdx;
    const selectedLine = gMeme.lines[selectedLineIdx];
    return selectedLine;
}

function setSelectedLine(id) {
    gMeme.selectedLineIdx = id;
}

function getLines() {
    const lines = gMeme.lines;
    return lines;
}

function resetLines() {
    gMeme.lines[0] = { txt: '', size: 48, x: 250, y: 65, align: 'center', stroke: 'black' };
    gMeme.lines[1] = { txt: '', size: 48, x: 250, y: 435, align: 'center', stroke: 'black' };
}

function setFontSize(value) {
    const selectedLine = getSelectedLine();
    if (value === '+') selectedLine.size++;
    else selectedLine.size--;
    drawImg();
}

function setLinePosition(value) {
    const selectedLine = getSelectedLine();
    if (value === '+') selectedLine.y--;
    else selectedLine.y++;
    drawImg();
}

function setImg(elImg) {
    gMeme.selectedImgId = parseInt(elImg.id);
}

function setLine(txt, id) {
    gMeme.selectedLineIdx = id;
    gMeme.lines[id].txt = txt;
    drawImg();
}

function getImgSrc() {
    const imgId = gMeme.selectedImgId;
    const imgSrc = gImgs.find(img => img.id === imgId).url;
    return imgSrc;
}

function getImgs() {
    const imgs = gImgs;
    return imgs;
}

createImg()
function createImg() {
    for (let i = 0; i < 18; i++) {
        var img = {
            id: gId++,
            url: `img/${i + 1}.jpg`
        }
        gImgs.push(img)
    }
}