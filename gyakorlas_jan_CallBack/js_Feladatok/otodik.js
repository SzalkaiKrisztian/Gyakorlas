/**
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType
 * @callback VisszaHiv
 * @param {RowspanRowType} elem
 * @param {HTMLTableSectionElement} tbody
 * @param {HTMLTableCellElement} cb1
 * @returns {HTMLTableCellElement}
 */
/**@type {RowspanRowType[]} */
const arr = [//amit general
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút",
        concepts1: "képvers",
        title2: "Búcsú",
        concepts2: "avantgárd"
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény"
    },
    {
        author: "Franz Kafka",
        title1: "A per",
        concepts1: "képvers",
        title2: "Az átvlátozás",
        concepts2: "kisregény"
    }
]
//-------------------------------------------
class Osztaly {
    /**@param {RowspanRowType[]} arr  */
    constructor(arr) {
        this.arr = arr
    }
    /**
     * Az osztálynak definiálj egy render metódust, amely egy callback-et vár, valamint egy tbody elemet, és a tömb minden egyes elemén meghívjuk
     * @param {VisszaHiv} callback 
     * @param {HTMLTableSectionElement} tbody 
     */
    render(callback, tbody) {
        for (const i of this.arr) {
            callback(i, tbody)
        }
    }
    /**
     * 
     * @param {VisszaHiv} callback 
     * @param {HTMLTableSectionElement} tbody 
     */
    renderOptionalCell(callback, tbody) {
        for (const elem of this.arr) {
            const tr1 = document.createElement('tr')
            tbody.appendChild(tr1)

            const td1 = document.createElement('td')
            td1.innerText = elem.author
            tr1.appendChild(td1)

            const td2 = document.createElement('td')
            td2.innerText = elem.title1
            tr1.appendChild(td2)

            const td3 = document.createElement('td')
            td3.innerText = elem.concepts1
            tr1.appendChild(td3)

            callback(elem, tbody, td1)
        }
    }
    /**
     * 
     * @param {HTMLTableSectionElement} tbody 
     * @param {VisszaHiv} callback1 
     * @param {VisszaHiv} callback2 
     * @param {VisszaHiv} callback3 
     * @param {VisszaHiv} callback4 
     */
    negyMethod(tbody, callback1, callback2, callback3, callback4) {
        for (const elem of this.arr) {
            const cb1 = callback1(elem, tbody)
            if (callback2(elem)) {
                callback3(tbody, elem, cb1)
            } else {
                callback4(tbody, elem, cb1)
            }
        }
    }
}

//----------------------------------------Keret
const table = document.createElement('table')
document.body.appendChild(table)
const tablebody = document.createElement('tbody')
table.appendChild(tablebody)

//-----------------------------------peldany + generate body
const peldany = new Osztaly(arr)

//Hívd meg a render metódost egy olyan callbackel, ami hozzácsatolja bemeneti tbody-hoz a táblázat sorait, valamint amennyiben van concepts2 és title2 tulajdonság is, akkor „rowspanos” sort fűz hozzá a táblázathoz! Mielőtt példányosítod az osztályt,
peldany.render(function (elem, tablebody) {
    const tr1 = document.createElement('tr')
    tablebody.appendChild(tr1)

    const td1 = document.createElement('td')
    td1.innerText = elem.author
    tr1.appendChild(td1)

    const td2 = document.createElement('td')
    td2.innerText = elem.title1
    tr1.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerText = elem.concepts1
    tr1.appendChild(td3)

    if (elem.title2 && elem.concepts2) {
        td1.rowSpan = 2 //kibőviti az elsőt a wart ha van több

        const tr2 = document.createElement('tr')
        tablebody.appendChild(tr2) //egy új sorba fűzzük az új információt, mivwl bővitjük a war 2-re

        const td4 = document.createElement('td')
        td4.innerText = elem.title2
        tr2.appendChild(td4)

        const td5 = document.createElement('td')
        td5.innerText = elem.concepts2
        tr2.appendChild(td5)
    }
}, tablebody)

//2.feladat
const t2body = document.createElement('tbody')
table.appendChild(t2body)

peldany.render(function (elem, t2body) {
    const tr1 = document.createElement('tr')
    t2body.appendChild(tr1)

    const td1 = document.createElement('td')
    td1.innerText = elem.author
    tr1.appendChild(td1)

    const td2 = document.createElement('td')
    td2.innerText = elem.title1
    tr1.appendChild(td2)

    if (!elem.title2) {
        td2.colSpan = 2
    } else {
        const td4 = document.createElement('td')
        td4.innerText = elem.title2
        tr1.appendChild(td4)
    }
}, t2body)

//3.feladat
document.body.appendChild(document.createElement('br'))
const table2 = document.createElement('table')
document.body.appendChild(table2)
const t3body = document.createElement('tbody')
table2.appendChild(t3body)

const peldany3feladat = new Osztaly(arr)

peldany.renderOptionalCell(function (elem, t3body, td1) {
    if (elem.title2 && elem.concepts2) {
        td1.rowSpan = 2 //kibőviti az elsőt a wart ha van több

        const tr2 = document.createElement('tr')
        t3body.appendChild(tr2) //egy új sorba fűzzük az új információt, mivwl bővitjük a war 2-re

        const td4 = document.createElement('td')
        td4.innerText = elem.title2
        tr2.appendChild(td4)

        const td5 = document.createElement('td')
        td5.innerText = elem.concepts2
        tr2.appendChild(td5)
    }
}, t3body)

//4.feladat
document.body.appendChild(document.createElement('br'))
const table3 = document.createElement('table')
document.body.appendChild(table3)
const t4body = document.createElement('tbody')
table3.appendChild(t4body)

const peldany4feladat = new Osztaly(arr)

peldany4feladat.negyMethod(t4body,
    function (elem, t4body) {//alap:
        const tr1 = document.createElement('tr')
        t4body.appendChild(tr1)

        const td1 = document.createElement('td')
        td1.innerText = elem.author
        tr1.appendChild(td1)

        const td2 = document.createElement('td')
        td2.innerText = elem.title1
        tr1.appendChild(td2)

        const td3 = document.createElement('td')
        td3.innerText = elem.concepts1
        tr1.appendChild(td3)

        return td1
    },
    function (elem) {//if:
        if(elem.title2 && elem.concepts2){
            return true;
        }else{
            return false;
        }
    },
    function (t4body, elem, cb1) {//if true:
        cb1.rowSpan = 2 

        const tr2 = document.createElement('tr')
        t4body.appendChild(tr2) 

        const td4 = document.createElement('td')
        td4.innerText = elem.title2
        tr2.appendChild(td4)

        const td5 = document.createElement('td')
        td5.innerText = elem.concepts2
        tr2.appendChild(td5)
    },
    function () {//if false:
    },
)

//5.feladat
const peldany5feladat = new Osztaly(arr)

document.body.appendChild(document.createElement('br'))
const table5 = document.createElement('table')
document.body.appendChild(table5)
const t5body = document.createElement('tbody')
table5.appendChild(t5body)

peldany5feladat.negyMethod(t5body,
    function(elem,t5body){//alap
        const tr1 = document.createElement('tr')
        t5body.appendChild(tr1)

        const td1 = document.createElement('td')
        td1.innerText = elem.author
        tr1.appendChild(td1)

        const td2 = document.createElement('td')
        td2.innerText = elem.title1
        tr1.appendChild(td2)

        const td3 = document.createElement('td')
        td3.innerText = elem.concepts1
        tr1.appendChild(td3)

        return td3
    },
    function(elem){//if
        if(elem.title2){
            return true;
        }else{
            return false;
        }
    },
    function(_t5body, elem, cb1){//true
        /**@type {HTMLTableRowElement} */
        const tr1 = cb1.parentElement
        const td2 = document.createElement('td')
        td2.innerText = elem.title2
        tr1.appendChild(td2)
    },
    function(_t5body, _elem, cb1){//false
        cb1.colSpan=2
    }
)