'use strict'

function collectionHTML() {
    const footer = document.querySelector("footer")
    
    const htmlColection = document.createElement("p")
    htmlColection.id = "collection"
    htmlColection.innerHTML = `
    <u>HTMLCollection</u>
    <b></b>
    `
    footer.appendChild(htmlColection)

    const htmlLength = document.createElement("p")
    htmlLength.id = "length"
    htmlLength.innerHTML = `
    <u>Lenght</u>
    <b></b>
    `
    footer.appendChild(htmlLength)

    const fontFamily = document.createElement("p")
    fontFamily.id = "fontFamily"
    fontFamily.className = "medium"
    fontFamily.innerHTML = `
    <u>Font Family</u>
    <small></small>
    `
    footer.appendChild(fontFamily)
}

function collection(i) {
    const collection = document.querySelector("#collection b")
    const length = document.querySelector("#length b")
    let tagName = i.tagName
    collection.innerText = tagName
    let elements = document.getElementsByTagName(tagName)
    length.innerText = elements.length
}

function fontFamily(i) {
    const fontFamily = getComputedStyle(i).fontFamily
    document.querySelector("#fontFamily small").innerText = fontFamily
}

window.addEventListener('load', (event) => {
    collection(document.documentElement)
    fontFamily(document.body)

    document.addEventListener("mouseover", function (event) {
        collection(event.target)
        fontFamily(event.target)
    })
})