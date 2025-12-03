/**
 * @typedef {{hely:string,agazat1:string,pelda1:string,agazat2?:string,pelda2?:string}} TableRow
 * @typedef {{txt:string,lIId:string,iName:string}} FormDivData
 */
/**
 * 
 * @param {"td"|"th"} cellType 
 * @param {string} cellTxt 
 * @param {HTMLTableRowElement} parentTr 
 * @returns {HTMLTableCellElement}
 */
function createTAbleCell(cellType, cellTxt, parentTr) {
    const tdh = document.createElement(cellType)
    tdh.innerText = cellTxt
    parentTr.appendChild(tdh)
    return tdh
}
/**
 * 
 * @param {HTMLTableCellElement} cellSpan 
 * @param {HTMLTableSectionElement} parentBody 
 * @param {TableRow} rowObj 
 * @returns {void}
 */
function createRowSpanVariant(cellSpan, parentBody, rowObj) {
    if (rowObj.agazat2 && rowObj.pelda2) {
        cellSpan.rowSpan = 2
        const tr = document.createElement('tr')
        parentBody.appendChild(tr)
        createTAbleCell("td", rowObj.agazat2, tr)
        createTAbleCell("td", rowObj.pelda2, tr)
    }
}
/**
 * 
 * @param {HTMLTableCellElement} cellSpan 
 * @param {HTMLTableRowElement} parentTr 
 * @param {TableRow} rowObj 
 * @returns {void}
 */
function createColSpanVariant(cellSpan, parentTr, rowObj) {
    if (rowObj.pelda2) {
        createTAbleCell("td", rowObj.pelda2, parentTr)
    }else{
        cellSpan.rowSpan = 2
    }
}
/**
 * 
 * @param {"col"|"row"} rowType 
 * @param {HTMLTableSectionElement} parentBody 
 * @param {TableRow} rowObj 
 * @returns {void}
 */
function createTableRowCR(rowType, parentBody, rowObj) {
    const tr = document.createElement('tr')
    parentBody.appendChild(tr)

    const tdH = createTAbleCell("td", rowObj.hely, tr)
    createTAbleCell("td", rowObj.agazat1, tr)
    const tdP = createTAbleCell("td", rowObj.pelda1, tr)
    if (rowType == "row") {
        createRowSpanVariant(tdH,parentBody,rowObj)
    }else{
        createColSpanVariant(tdP,tr,rowObj)
    }
}
/**
 * 
 * @param {string} divOption 
 * @param {string} tbodyId 
 * @param {string[]} fejLec 
 * @param {TableRow[]} arrO
 * @returns {void}
 */
function createFrame(divOption,tbodyId,fejLec,arrO){
    const div = document.createElement('div')
    div.id=divOption
    div.classList.add('hide')
    document.body.appendChild(div)

    const table = document.createElement('table')
    div.appendChild(table)

    const thead= document.createElement('thead')
    table.appendChild(thead)

    const tr= document.createElement('tr')
    thead.appendChild(tr)

    for(const cim of fejLec){
        createTAbleCell("th",cim,tr)
    }

    const tbody= document.createElement('tbody')
    tbody.id=tbodyId
    table.appendChild(tbody)

    createTableBody(arrO)
}
/**
 * 
 * @param {TableRow[]} tableArr 
 * @returns {void}
 */
function createTableBody(tableArr){
    const tbody=document.getElementById('jsbody')
    tbody.innerHTML=""

    for(const obj of tableArr){
        createTableRowCR("row",tbody,obj)
    }
}
//--------------------------------------------------------------------------------------------------------
/**
 * 
 * @param {HTMLSelectElement} selectElement 
 * @returns {void}
 */
function toggleVisible(selectElement){
    const jsOption=document.getElementById('jsoption')
    const htmlOption = document.getElementById('htmloption')
    if(selectElement.value == jsOption.id){
        htmlOption.classList.add('hide')
        jsOption.classList.remove('hide')
    }else{
        jsOption.classList.add('hide')
        htmlOption.classList.remove('hide')
    }
    
    
    
}
/**
 * 
 * @param {Event} e 
 * @returns {void}
 */
function SelectToggle(e){
    e.preventDefault()

    /**@type {HTMLSelectElement} */
    const target=e.target

    toggleVisible(target)
}
/**
 * @returns {void}
 */
function OptionSelected(){
    const tableSelector = document.getElementById('tableselector')
    toggleVisible(tableSelector)
    tableSelector.addEventListener("change",SelectToggle)
}
//--------------------------------------------------------------------------------------------------------
/**
 * 
 * @param {HTMLDivElement} parentDiv 
 * @returns {void}
 */
function createBr(parentDiv){
    const br = document.createElement('br')
    parentDiv.appendChild(br)
}
/**
 * 
 * @param {HTMLFormElement} parentForm 
 * @param {string} labelTxt 
 * @param {string} labInpId 
 * @param {string} inpName 
 */
function createFormDiv(parentForm,labelTxt,labInpId,inpName){
    const div = document.createElement('div')
    parentForm.appendChild(div)

    const label=document.createElement('label')
    label.htmlFor=labInpId
    label.innerText=labelTxt
    div.appendChild(label)
    createBr(div)
    const input = document.createElement('input')
    input.type="text"
    input.name=inpName
    input.id=labInpId
    div.appendChild(input)
    createBr(div)
    const span = document.createElement('span')
    span.classList.add('error')
    div.appendChild(span)
    createBr(div)
}
/**
 * @param {string} formId
 * @param {FormDivData} formArr 
 * @returns {HTMLFormElement}
 */
function createForm(formId,formArr){
    const jsOption = document.getElementById('jsoption')
    
    const form = document.createElement('form')
    form.id=formId
    jsOption.appendChild(form)

    for(const obj of formArr){
        createFormDiv(form,obj.txt,obj.lIId,obj.iName)
    }

    const button = document.createElement('button')
    button.innerText="Hozzáadás"
    form.appendChild(button)

    return form
}