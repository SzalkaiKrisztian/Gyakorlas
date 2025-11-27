/**
 * @typedef {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}} TablaArryTipus
 * @typedef {{txt:string,tag:string}} FormArryTipus
 */
//----------------------------Table------------------------------------->
/**
 * @param {"td"|"th"} cellType
 * @param {string} cellContent
 * @param {HTMLTableRowElement} parentTr
 * @returns {HTMLTableCellElement}
 */
function createTableCell(cellType,cellContent,parentTr){
    const tdvh = document.createElement(cellType)
    tdvh.innerText=cellContent
    parentTr.appendChild(tdvh)
    return tdvh
}
/**
 * @param {HTMLTableSectionElement} bodyAmihezFuz
 * @param {TableArryTipus} egyObjeltumAdatai
 * @returns {void}
 */
function createTableRow(bodyAmihezFuz,egyObjeltumAdatai){
    const bodyTr = document.createElement('tr')
    bodyAmihezFuz.appendChild(bodyTr)

    const tdNemzet = createTableCell("td",egyObjeltumAdatai.nemzet,bodyTr)

    tdNemzet.addEventListener('click',function(e){
        /**@type {HTMLTableCellElement} */
        const target = e.target
        const tdTrTbody = target.parentElement.parentElement
        const findMarked = tdTrTbody.querySelector('.marked')
        if(findMarked != null){
            findMarked.classList.remove('marked')
        }
        target.classList.add('marked')
    })

    createTableCell("td",egyObjeltumAdatai.szerzo,bodyTr)
    createTableCell("td",egyObjeltumAdatai.mu,bodyTr)
    
    if(egyObjeltumAdatai.szerzo2 && egyObjeltumAdatai.mu2){
        tdNemzet.rowSpan=2
        const bodyTrFuzTr =document.createElement('tr')
        bodyAmihezFuz.appendChild(bodyTrFuzTr)

        createTableCell("td",egyObjeltumAdatai.szerzo2,bodyTrFuzTr)
        createTableCell("td",egyObjeltumAdatai.mu2,bodyTrFuzTr)
    }
}
/**
 * 
 * @param {HTMLTableElement} tableAmihezFuz 
 * @param {string[]} fejLec 
 * @returns {void}
 */
function createTableHeader(tableAmihezFuz,fejLec){
    const thead = document.createElement('thead')
    tableAmihezFuz.appendChild(thead)

    const theadTr = document.createElement('tr')
    thead.appendChild(theadTr)

    for(const elem of fejLec){
    createTableCell("th",elem,theadTr)
}
}
/**
 * @param {TablaArryTipus[]} tombArry
 * @returns {void}
 */
function createTableBody(tombArry){
    const jsTbody = document.getElementById('jsTable')
    jsTbody.innerHTML=''
    for(const cim of tombArry){
        createTableRow(jsTbody,cim)
    }
}
/**
 * 
 * @param {string} bodyId 
 * @param {string[]} fejLec
 * @param {TablaArryTipus[]} tombArry
 * @returns {void}
 */
function createTable(bodyId,fejLec){
    const table = document.createElement('table')
    document.body.appendChild(table)

    createTableHeader(table,fejLec)

    const jsTbody = document.createElement('tbody')
    table.appendChild(jsTbody)
    jsTbody.id=bodyId
}
//----------------------------Form-------------------------------------->
/**
 * 
 * @param {HTMLDivElement} parentDiv
 * @returns {void} 
 */
function bR(parentDiv){
    const br = document.createElement('br')
    parentDiv.appendChild(br)
}
/**
 * 
 * @param {HTMLFormElement} parentForm 
 * @param {string} forIdNameTag 
 * @param {string} labContent 
 * @returns {void}
 */
function createFormDivElement(parentForm,forIdNameTag,labContent){
    const div = document.createElement('div')
    parentForm.appendChild(div)

    const label = document.createElement('label')
    label.htmlFor=forIdNameTag
    label.innerText=labContent
    div.appendChild(label)
    bR(div)
    const input = document.createElement('input')
    input.type="text"
    input.id=forIdNameTag
    input.forIdNameTag
    div.appendChild(input)
    bR(div)
    const span = document.createElement('span')
    span.classList.add('error')
    div.appendChild(span)
    bR(div)
}
/**
 * 
 * @param {string} id 
 * @param {FormArryTipus[]} txtTag 
 * @returns {HTMLFormElement}
 */
function createForm(id,txtTag){
    const jsform = document.createElement('form')
    jsform.id=id
    document.body.appendChild(jsform)

    for(const cim of txtTag){
        createFormDivElement(jsform,cim.tag,cim.txt)
    }

    const jsButton = document.createElement('button')
    jsButton.innerText="Hozzáadás"
    jsform.appendChild(jsButton)
    return jsform
}
//----------------------------event,valid------------------------------------------->
/**
 * 
 * @param {HTMLInputElement} azInput 
 * @param {string} errorSzoveg 
 * @returns {Boolean}
 */
function validField(azInput,errorSzoveg){
    let vanE= true
    if(azInput.value == ''){
        const parentDiv = azInput.parentElement
        const span=parentDiv.querySelector('.error')
        span.innerText=errorSzoveg
        vanE=false
    }else{
        const parentDiv = azInput.parentElement
        const span=parentDiv.querySelector('.error')
        span.innerText=''
    }
    return vanE
}
/**
 * 
 * @param {HTMLInputElement} nemzetInput 
 * @param {HTMLInputElement} szerzo1Input 
 * @param {HTMLInputElement} mu1Input
 * @returns {Boolean} 
 */
function validFields(nemzetInput,szerzo1Input,mu1Input){
    let vanE=true
    if(validField(nemzetInput,"Kötelező Kitölteni!") == false){vanE=false}
    if(validField(szerzo1Input,"Kötelező Kitölteni!") == false){vanE=false}
    if(validField(mu1Input,"Kötelező Kitölteni!") == false){vanE=false}
    return vanE
}
/**
 * @param {Event} e 
 * @returns {void}
*/
function addTableRowToTable(e){
    e.preventDefault()
    /**@type {HTMLFormElement} */
    const target =e.target

    //-------------------------------------Lekerem az inputokat------------------------>
    /**@type {HTMLInputElement} */
    const nemzetisegInput = target.querySelector('#nemzetiseg')
    /**@type {HTMLInputElement} */
    const szerzo1Input = target.querySelector('#szerzo1')
    /**@type {HTMLInputElement} */
    const mu1Input = target.querySelector('#mu1')
    /**@type {HTMLInputElement} */
    const szerzo2Input = target.querySelector('#szerzo2')
    /**@type {HTMLInputElement} */
    const mu2Input = target.querySelector('#mu2')

    if(validFields(nemzetisegInput,szerzo1Input,mu1Input)){
        //----------------------------------------string típusuvá állitjuk az inputokat--------------->
        /**@type {string} */
        const nemzetisegInputString = nemzetisegInput.value
        /**@type {string} */
        const szerzo1InputString = szerzo1Input.value
        /**@type {string}*/
        const mu1InputString =mu1Input.value
        /**@type {string} */
        const szerzo2InputString = szerzo2Input.value
        /**@type {string}*/
        const mu2InputString =mu2Input.value

        //----------------------------Feltöltjük a stringeket egy objektumba----------------------->
        /**@type {TablaArryTipus} */
        const obj ={}
        obj.nemzet=nemzetisegInputString
        obj.szerzo=szerzo1InputString
        obj.mu=mu1InputString
        //-----ha üres akkor undefined-ra sllitjuk az objektumban (obj)-------------->
        szerzo2InputString =='' ? obj.szerzo2=undefined : obj.szerzo2=szerzo2InputString
        mu2InputString == '' ? obj.mu2 = undefined : obj.mu2=mu2InputString

        //-------------------------------------HozzáFűz--------------------------------------------------->
        const htmlTable=document.getElementById('htmlTable')
        createTableRow(htmlTable,obj)
        console.log(obj)
    }
}