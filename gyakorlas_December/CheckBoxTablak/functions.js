/**
 * @typedef {{hely:string,ag1:string,pl1:string,ag2?:string,pl2?:string}} TableArry
 */
//--------------------------------tABLE + Frame------------------------------------->
/**
 * létrtehoz egy cellát adott th vagy td-vel, adott tartalommal, és hozzáfűzui az adott sorhoz
 * @param {"td"|"th"} cellType 
 * @param {string} cellContent 
 * @param {HTMLTableRowElement} parentTr 
 * @returns {HTMLTableCellElement}
 */
function generateTableCell(cellType,cellContent,parentTr){
    const tdh = document.createElement(cellType)
    tdh.innerText=cellContent
    parentTr.appendChild(tdh)
    return tdh
}
/**
 * Ha row akkor rowos sort general (fontos a késöbbi eventlistener miatt mikor a html coltablahoz fuzzuk a sort a generatetableRowVcol fuggvennyel)
 * @param {HTMLTableCellElement} cellSpan 
 * @param {HTMLTableSectionElement} tableBodyAmihezFuz 
 * @param {TableArry} sorObj 
 * @returns {void}
 */
function generateRowVariant(cellSpan,tableBodyAmihezFuz,sorObj){
    if(sorObj.ag2 && sorObj.pl2){
        cellSpan.rowSpan=2
    
        const tr = document.createElement('tr')
        tableBodyAmihezFuz.appendChild(tr)

        generateTableCell("td",sorObj.ag2,tr)
        generateTableCell("td",sorObj.pl2,tr)
    }
}
/**
 * Ha col akkor colos sort general (fontos a késöbbi eventlistener miatt mikor a html coltablahoz fuzzuk a sort a generatetableRowVcol fuggvennyel)
 * @param {HTMLTableCellElement} cellSpan 
 * @param {HTMLTableRowElement} tableTrAmihezFuz 
 * @param {TableArry} sorObj 
 * @returns {void}
 */
function generateColVariant(cellSpan,tableTrAmihezFuz,sorObj){
    if(sorObj.pl2){
        generateTableCell("td",sorObj.pl2,tableTrAmihezFuz)
    }else{
        cellSpan.colSpan=2
    }
}
/**
 * letrehoz egy sort colost vagy rowost a parametertől függően
 * @param {"col"|"row"} colVrow 
 * @param {HTMLTableSectionElement} tableBodyAmihezFuz 
 * @param {TableArry} sorObj 
 * @returns {void}
 */
function generateTableRowVCol(colVrow,tableBodyAmihezFuz,sorObj){
    const tr = document.createElement('tr')
    tableBodyAmihezFuz.appendChild(tr)

    const tdH = generateTableCell("td",sorObj.hely,tr)
    generateTableCell("td",sorObj.ag1,tr)
    const tdP = generateTableCell("td",sorObj.pl1,tr)

    if(colVrow =='row'){
        generateRowVariant(tdH,tableBodyAmihezFuz,sorObj)
    }else{
        generateColVariant(tdP,tr,sorObj)
    }
}
/**
 * létrehozza a keretrendszert a tablenak, és a divet a késöbbi formnak!
 * @param {string} sectionId 
 * @param {string} tableBodyId 
 * @param {string[]} fejLec 
 * @returns {void}
 */
function generateFrame(sectionId,tableBodyId,fejLec){
    const jsSectionDiv = document.createElement('div')
    jsSectionDiv.id=sectionId
    jsSectionDiv.classList.add('hide')
    document.body.appendChild(jsSectionDiv)
    //nem ismétlődik, és nincs global valtozo, szoval nem szervezem ki függvénybe!--->
    const table = document.createElement('table')
    jsSectionDiv.appendChild(table)

    const thead= document.createElement('thead')
    table.appendChild(thead)

    const tr = document.createElement('tr')
    thead.appendChild(tr)

    for(const cim of fejLec){
        generateTableCell("th",cim,tr)
    }

    const tbody = document.createElement('tbody')
    tbody.id=tableBodyId
    table.appendChild(tbody)
}
/**
 * lérehoz egy Rowos table Body-t, csak objarry bemenettel
 * @param {TableArry[]} TableArrRow 
 * @returns {void}
 */
function generateTableBody(TableArrRow){
    const tbody = document.getElementById('jsBody')
    tbody.innerHTML=''

    for(const obj of TableArrRow){
        generateTableRowVCol("row",tbody,obj)
    }
}
//--------------------------------CheckBox------------------------------------->
/**
 *  beállítja alapvetően a html section jelenjen meg, ha bepipaljuk, akkor js section
 * @param {HTMLInputElement} pipaBox 
 * @returns {void}
 */
function hideIfChecked(pipaBox){
    pipa = pipaBox.checked
    if(pipa){
        const htmlSectionDiv = document.body.querySelector('#htmlSection')
        htmlSectionDiv.classList.add('hide')
        const jsSectionDiv = document.body.querySelector('#jsSection')
        jsSectionDiv.classList.remove('hide')
    }else{
        const htmlSectionDiv = document.body.querySelector('#htmlSection')
        htmlSectionDiv.classList.remove('hide')
        const jsSectionDiv = document.body.querySelector('#jsSection')
        jsSectionDiv.classList.add('hide')
    }
}
/**
 *  ha bepipaljuk a negyzetet, akkor meghivja a hideifchecked fuggvenyt ezzel frissitve az oldalt és a jssection megjelenítve
 * @param {Event} e 
 * @returns {void}
 */
function bePipalva(e){
    e.preventDefault()

    /**@type {HTMLInputElement} */
    const target=e.target

    hideIfChecked(target)
}
/**
 * eltuntetek egy globalis valtozot
 * @returns {void}
 */
function Check(){
    const tableSelector = document.getElementById('tableSelector')
    hideIfChecked(tableSelector)
    tableSelector.addEventListener('change',bePipalva)
}
//--------------------------------Form------------------------------------->

//--------------------------------Event + Valid------------------------------------->