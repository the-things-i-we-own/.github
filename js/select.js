'use strict'

function select(arr, name = "") {
  let eachORG = arr + 'Each'
  let optionORG = arr + 'Option'
  let selectORG = document.querySelector(`#filter *[name="${name}"]`)
  Object.entries(arr).forEach(eachORG => {
    const optionORG = document.createElement('option')
    optionORG.value = eachORG[0]
    optionORG.innerText = eachORG[1]
    selectORG.appendChild(optionORG)
  })
}
