'use strict'

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function random255() {
    let random255 = `rgb(${random(255)},${random(255)},${random(255)})`;
    return random255;
}

function randomRGB() {
    const footer = document.querySelector("footer")

    const thisColor = document.createElement("p")
    thisColor.id = "color"
    thisColor.innerHTML = `
    <u>Color</u>
    <small></small>
    `
    footer.appendChild(thisColor)

    const thisBGColor = document.createElement("p")
    thisBGColor.id = "bgColor"
    thisBGColor.innerHTML = `
    <u>Background Color</u>
    <small></small>
    `
    footer.appendChild(thisBGColor)

    const colorAll = document.querySelectorAll('#result, select');
    for (const colorItem of colorAll) {
        colorItem.style.color = random255();
    }

    const bgAll = document.querySelectorAll('body, #things, #things li a, #readme, h1, footer p, #changeMain');
    for (const bgItem of bgAll) {
        bgItem.style.color = "#fff";
        bgItem.style.backgroundColor = random255();
    }
}

function color(i) {
    const color = getComputedStyle(i).color
    document.querySelector("#color small").innerText = color
}

function bgColor(i) {
    const bgColor = getComputedStyle(i).backgroundColor
    document.className = 'medium'
    document.querySelector("#bgColor small").innerText = bgColor
}

window.addEventListener('load', (event) => {
    color(document.body)
    bgColor(document.body)
})

document.addEventListener("mouseover", function (event) {
    color(event.target)
    bgColor(event.target)
})