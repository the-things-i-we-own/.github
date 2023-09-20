'use strict'

function select(arr, name) {
  const selectORG = document.createElement('select')
  selectORG.setAttribute('name', name)
  document.querySelector('#filter').appendChild(selectORG)
  Object.entries(arr).forEach(eachORG => {
    const optionORG = document.createElement('option')
    optionORG.value = eachORG[0]
    optionORG.innerText = eachORG[1]
    selectORG.appendChild(optionORG)
  })
}

window.addEventListener("load", () => {
  let result = document.querySelector("#result")

  // ****** for all select ******
  let filter = document.querySelectorAll("#filter select");
  for (let i of filter) {
    i.addEventListener('change', () => {
      // *** for each target ***
      let targets = document.querySelectorAll("#things li")
      for (let ii of targets) {
        // *** delete hidden ***
        ii.hidden = false;
        // *** check target every select ***
        for (let iii of filter) {
          let value = iii.value
          let name = iii.getAttribute('name')
          let item_data = ii.getAttribute('data-' + name)
          // *** set hidden class ***
          if (value && value !== 'all' && value !== item_data) {
            ii.hidden = true;
            result.innerText = targets.length - document.querySelectorAll('#things li[hidden]').length
          }
        }
      }
    });
  }
});
