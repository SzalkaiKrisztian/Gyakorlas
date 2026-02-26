import { createTable } from "./functions.js"
import { Manager } from "./manager.js"
/**
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {import("./functions").ColspanType | import("./functions").RowspanType} type
 * @returns {void}
 */

class Table {
    /**@type {HTMLTableSectionElement} */
    #tbody
    /**@type {Manager} */
    #manager
    /**
     * 
     * @param {import("./functions").HeaderType[]} headerList 
     * @param {Manager} manager 
     */
    constructor(headerList,manager){
        this.#manager=manager
        this.#tbody=createTable(document.body,(row)=>{
            for(const cim of headerList){
                const th=document.createElement("th")
                th.innerText=cim.name
                row.appendChild(th)
                if(cim.colspan){th.colSpan=2}
            }
        })
    }
    /**
     * @param {TableCallback} callback 
     */
    setAppendRow(callback){
        this.#manager.addCallback=(elem)=>{callback(this.#tbody,elem)}
    }
}
export {Table}