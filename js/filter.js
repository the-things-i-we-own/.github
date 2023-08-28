'use strict'

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'complete') {
    let targets = document.querySelectorAll(".list li")
    let filter = document.querySelectorAll("#filter select")
    let result = document.querySelector("#result")
    let result_org = "";

    if (filter) {
      //****** for all select ******
      for (let i of filter) {
        i.addEventListener('change', () => {
          let org_num = 0;
          //*** for each target ***
          for (let ii of targets) {
            //*** delete hidden class ***
            ii.classList.remove('hidden')
            //*** check target every select ***
            for (let iii of filter) {
              let value = iii.value
              let name = iii.getAttribute('name')
              let item_data = ii.getAttribute('data-' + name)
              //*** set hidden class ***
              if (value && value !== 'all' && value !== item_data && !ii.classList.contains('hidden')) {
                ii.classList.add('hidden')
                org_num++;
              }
            }
          }

          //****** result message ******
          if (result) {
            if (org_num === targets.length) {
              result_org = "There's no such thing"
            } else {
              let result_num = targets.length - org_num;
              result_org = '<b>' + result_num + '</b>' + result_txt
            }
            result.innerHTML = result_org
          }
        });
      }
    }
  }
});
