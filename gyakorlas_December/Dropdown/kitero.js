const div = document.createElement('div')
div.id="jsoption"
div.classList.add('hide')
document.body.appendChild(div)

const h2 = document.createElement('h2')
h2.innerText='js'
div.appendChild(h2)

const tableDropDown= document.getElementById('tabledropdown')
hideOrShow(tableDropDown)
tableDropDown.addEventListener('change',valaszto)