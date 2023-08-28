'use strict'

// html lang="ja" onClick="counter(this)"
let count = 0;
let click = document.querySelector("#click b");

function counter(obj){
	count++;
	click.innerText = count;
}


function collection(i){
  const collection = document.querySelector("#collection span")
  const length = document.querySelector("#length span")
  let tagName = i.tagName
  collection.innerText = tagName
  let elements = document.getElementsByTagName(tagName)
  length.innerText = elements.length
}

function color(i){
  const color = getComputedStyle(i).color
  document.querySelector("#color small").innerText = color
}

function bgColor(i){
  const bgColor = getComputedStyle(i).backgroundColor
  document.querySelector("#bgColor small").innerText = bgColor
}

function fontFamily(i){
  const fontFamily = getComputedStyle(i).fontFamily
  document.querySelector("#fontFamily small").innerText = fontFamily
}

window.addEventListener('load', (event) => {
  collection(document.documentElement)
  color(document.body)
  bgColor(document.body)
  fontFamily(document.body)
})

document.addEventListener("mouseover", function(event) {
  collection(event.target)
  color(event.target)
  bgColor(event.target)
  fontFamily(event.target)
})

let lastModified = document.querySelector('#lastModified time');
lastModified.innerText = document.lastModified;