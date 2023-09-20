'use strict'

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    allTheThings(index);
  }
  
  function allTheThings(obj) {
    const thingsUL = document.querySelector('#things');
    const thingAll = obj.things;
  
    for (const thing of thingAll) {
      const thingLi = document.createElement('li');
      thingLi.setAttribute("data-categories", thing.categories);
      thingLi.setAttribute("data-type", thing.type);
      thingLi.hidden = true;
      thingLi.innerHTML = `
      <p>
      <a href="${thing.url}">${thing.title}</a>
      <u>${thing.by}</u>
      </p>
      <small>${thing.description}</small>
      `;
      thingsUL.appendChild(thingLi);
    }
  }