/**
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType
 * @callback VisszaHiv
 * @param {RowspanRowType} par1
 * @param {HTMLTableSectionElement} par2
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
        for (const i of arr) {
            callback(i,tbody)
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
peldany.render(function (elem,tablebody) {
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
},tablebody)