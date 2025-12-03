/**
 * @typedef {{hely:string,ag1:string,pl1:string,ag2?:string,pl2?:string}} TableArry
 * @typedef {{forId:string,txt:string,inpName:string}} FormArry
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
    const tbody = document.getElementById('jsbody')
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
    const pipa = pipaBox.checked
    const htmlSectionDiv = document.body.querySelector('#htmlsection')
    const jsSectionDiv = document.body.querySelector('#jssection')
    if(pipa){
        htmlSectionDiv.classList.add('hide')
        jsSectionDiv.classList.remove('hide')
    }else{
        htmlSectionDiv.classList.remove('hide')
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
    const tableSelector = document.getElementById('tableselector')
    hideIfChecked(tableSelector)
    tableSelector.addEventListener('change',bePipalva)
}
//-------------------------------------1. commit-------------------------------------------
//--------------------------------Form------------------------------------->
/**
 * 3x fordul elo, ezert kirendezem fuggvenybe
 * @param {HTMLDivElement} parentDiv 
 * @returns {void}
 */
function bR(parentDiv){
    const br = document.createElement('br')
    parentDiv.appendChild(br)
}
/**
 * lerenderel egy formon belüli div-et ami tartalmaz egy labelt, inputot, spant, es sortoreseket kozte
 * @param {HTMLFormElement} parentForm 
 * @param {string} liId 
 * @param {string} labelTxt
 * @param {string} inputName  
 * @returns {void}
 */
function generateFormDivElement(parentForm,liId,labelTxt,inputName){
    const div = document.createElement('div')
    parentForm.appendChild(div)

    const label = document.createElement('label')
    label.htmlFor=liId
    label.innerText=labelTxt
    div.appendChild(label)
    bR(div)

    const input = document.createElement('input')
    input.type="text"
    input.id=liId
    input.name=inputName
    div.appendChild(input)
    bR(div)

    const span = document.createElement('span')
    span.classList.add('error')
    div.appendChild(span)
    bR(div)
}
/**
 * legeneralja a formot xd
 * @param {string} formId 
 * @param {FormArry[]} FormArry 
 * @returns {HTMLFormElement}
 */
function generateForm(formId,FormArry){
    const jsSection = document.getElementById('jssection')
    
    const form = document.createElement('form')
    form.id=formId
    jsSection.appendChild(form)
    
    for(const obj of FormArry){
        generateFormDivElement(form,obj.forId,obj.txt,obj.inpName)
    }

    const button = document.createElement('button')
    button.innerText="Hozzáadás"
    form.appendChild(button)
    return form
}
//-------------------------------------2. commit-------------------------------------------
//--------------------------------Event + Valid------------------------------------->
/**
 * megnezi van e az inputmezőben beadott text, ha nincs akkor span uzenete megjelenik, egyebkent nem
 * @param {HTMLInputElement} inputFiled 
 * @param {string} errorTxt 
 * @returns {Boolean}
 */
function validField(inputFiled,errorTxt){
    let van = true
    const parentDiv = inputFiled.parentElement
    if(inputFiled.value==''){
        const span = parentDiv.querySelector('.error')
        span.innerText=errorTxt
        van=false
    }else{
        const span = parentDiv.querySelector('.error')
        span.innerText=''
    }
    return van
}
/**
 * megnezi mind3 mezo kivan e toltve
 * @param {HTMLInputElement} hely 
 * @param {HTMLInputElement} ag1 
 * @param {HTMLInputElement} pl1 
 * @returns {Boolean}
 */
function validate3Fields(hely,ag1,pl1){
    let van = true
    if(validField(hely,"Kötelező kitőlteni!") == false){van=false}
    if(validField(ag1,"Kötelező kitőlteni!") == false){van=false}
    if(validField(pl1,"Kötelező kitőlteni!") == false){van=false}
    return van
}
/**
 * @param {Event} e
 * @returns {void}
 */
function addToHtmlTable(e){
    e.preventDefault()

    /**@type {HTMLFormElement} */
    const target=e.target

    /**@type {TableArry} */
    const obj ={}

    /**@type {HTMLInputElement} */
    const helyInput = target.querySelector('#elso')
    /**@type {HTMLInputElement} */
    const ag1Input = target.querySelector('#masodik')
    /**@type {HTMLInputElement} */
    const pl1Input = target.querySelector('#harmadik')
    /**@type {HTMLInputElement} */
    const pl2Input = target.querySelector('#negyedik')

    if(validate3Fields(helyInput,ag1Input,pl1Input)){
        /**@type {string} */
        const helyString = helyInput.value
        /**@type {string} */
        const ag1String = ag1Input.value
        /**@type {string} */
        const pl1String = pl1Input.value
        /**@type {string} */
        const pl2String = pl2Input.value

        obj.hely=helyString
        obj.ag1=ag1String
        obj.pl1=pl1String
        pl2String==''? obj.pl2=undefined : obj.pl2=pl2String
        obj.ag2=undefined

        const htmlBody = document.getElementById('htmlbody')
        generateTableRowVCol('col',htmlBody,obj)
        target.reset()
    }
}