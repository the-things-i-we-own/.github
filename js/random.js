'use strict'

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function randomRGB() {
    let random255 = `rgb(${random(255)},${random(255)},${random(255)})`;
    return random255;
}

const colorAll = document.querySelectorAll('#filter summary, #filter select, #log aside');
for (const colorItem of colorAll) {
    colorItem.style.color = randomRGB();
}

const bgAll = document.querySelectorAll('body, a, #readme, #backBtn, #log .list, #log aside p:not(#description)');
for (const bgItem of bgAll) {
    bgItem.style.color = "#fff";
    bgItem.style.backgroundColor = randomRGB();
}