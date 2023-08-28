'use strict'

let result_txt = "Websites"

let categories = {
  'weare' : 'Created',
  'inspirated' : 'Inspirated by',
}

let type = {
  'bookmark' : 'Bookmarks',
  'list' : 'Collections',
  'form' : 'Web Forms',
  'website' : 'Web Sites',
}

document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    select(categories, "categories");
    select(type, "type");
  }
}

async function mainSection() {
  fetch('README.md')
  .then(response => response.text())
  .then(innerText => {
    document.querySelector('#readme').innerText = innerText
  });
}

mainSection();
