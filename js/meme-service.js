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
            y: 65
        },
        {
            txt: '',
            size: 48,
            x: 250,
            y: 435
        }
    ]
}

function setSelectedLine(id) {
    gMeme.selectedLineIdx = id;
}

function getLines() {
    const lines = gMeme.lines;
    return lines;
}

function resetLines() {
    gMeme.lines[0] = { txt: '', size: 48, x: 250, y: 65 };
    gMeme.lines[1] = { txt: '', size: 48, x: 250, y: 435 };
}

function setFontSize(value) {
    const selectedLine = gMeme.selectedLineIdx;
    if (value === '+') gMeme.lines[selectedLine].size++;
    else gMeme.lines[selectedLine].size--;
    drawImg();
}

function setLinePosition(value) {
    const selectedLine = gMeme.selectedLineIdx;
    if (value === '+') gMeme.lines[selectedLine].y--;
    else gMeme.lines[selectedLine].y++;
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