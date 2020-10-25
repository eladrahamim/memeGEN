'use strict';

const gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'trump'] },
{ id: 2, url: 'img/2.jpg', keywords: ['cute', 'animal'] },
{ id: 3, url: 'img/3.jpg', keywords: ['cute', 'baby'] },
{ id: 4, url: 'img/4.jpg', keywords: ['sleep', 'computer'] },
{ id: 5, url: 'img/5.jpg', keywords: ['baby', 'yes'] },
{ id: 6, url: 'img/6.jpg', keywords: ['look'] },
{ id: 7, url: 'img/7.jpg', keywords: ['funny', 'shock'] },
{ id: 8, url: 'img/8.jpg', keywords: ['smile'] },
{ id: 9, url: 'img/9.jpg', keywords: ['funny', 'mean', 'baby'] },
{ id: 10, url: 'img/10.jpg', keywords: ['funny', 'obama', 'laugh'] },
{ id: 11, url: 'img/11.jpg', keywords: ['nba', 'love / hate'] },
{ id: 12, url: 'img/12.jpg', keywords: ['you'] },
{ id: 13, url: 'img/13.jpg', keywords: ['cheers', 'leonardo dicaprio'] },
{ id: 14, url: 'img/14.jpg', keywords: ['matrix', 'serious'] },
{ id: 15, url: 'img/15.jpg', keywords: ['zero', 'the lord of the rings'] },
{ id: 16, url: 'img/16.jpg', keywords: ['funny', 'laugh'] },
{ id: 17, url: 'img/17.jpg', keywords: ['putin', 'two'] },
{ id: 18, url: 'img/18.jpg', keywords: ['toy story', 'look'] }];

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
            stroke: 'black',
            fill: 'white',
            font: 'Impact'
        }
    ]
}

function switchLines() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0;
    else gMeme.selectedLineIdx++;
    return gMeme.lines[gMeme.selectedLineIdx].txt;
}

function addLine() {
    gMeme.selectedLineIdx = gMeme.lines.length;
    if (gMeme.lines.length === 1) gMeme.lines.push({ txt: '', size: 48, x: 250, y: 435, align: 'center', stroke: 'black', fill: 'white', font: 'Impact' })
    else gMeme.lines.push({ txt: '', size: 48, x: 250, y: 250, align: 'center', stroke: 'black', fill: 'white', font: 'Impact' })
}

function setFont(val) {
    const selectedLine = getSelectedLine();
    selectedLine.font = val;
}

function deleteLine() {
    console.log(gMeme.lines.length)
    if (gMeme.lines.length === 1) {
        const selectedLine = getSelectedLine();
        selectedLine.txt = '';
    } else gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    if(gMeme.selectedLineIdx > 0) gMeme.selectedLineIdx--;
}

function setFillColor(color) {
    const selectedLine = getSelectedLine();
    selectedLine.fill = color;
    console.log(selectedLine);
    if (selectedLine.txt) drawImg();
}

function setStrokeColor(color) {
    const selectedLine = getSelectedLine();
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

function getLines() {
    const lines = gMeme.lines;
    return lines;
}

function resetLines() {
    gMeme.lines = [{ txt: '', size: 48, x: 250, y: 65, align: 'center', stroke: 'black', fill: 'white', font: 'Impact' }];
    // gMeme.lines[0] = { txt: '', size: 48, x: 250, y: 65, align: 'center', stroke: 'black', fill: 'white', font: 'Impact' };
    // gMeme.lines[1] = { txt: '', size: 48, x: 250, y: 435, align: 'center', stroke: 'black', fill: 'white', font: 'Impact' };
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

function setTxt(txt) {
    const selectedLine = getSelectedLine();
    selectedLine.txt = txt;
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