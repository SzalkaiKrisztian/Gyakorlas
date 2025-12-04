const div = document.createElement('div')
div.id="jssection"
div.classList.add('hide')
document.body.appendChild(div)

const h2 = document.createElement('h2')
h2.innerText="js"
div.appendChild(h2)

const tableSelector = document.getElementById('tableselector')
showHide(tableSelector)
tableSelector.addEventListener('change',pipalva)

