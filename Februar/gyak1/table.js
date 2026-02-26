import { createTable } from "./functions.js";
import { Manager } from "./manager.js";
/**
 * @callback TAbleCB
 * @param {HTMLTableSectionElement}
 * @param {import("./functions").ColspanType | import("./functions").RowspanType} type
 * @returns {void}
 */

class Table{
    /**@type {HTMLTableSectionElement} */
    #tbody;
    /**@type {Manager} */
    #manager;
    /**
     * 
     * @param {import("./functions").HeaderType[]} headerArry 
     * @param {Manager} manager 
     */
    constructor(headerArry,manager){
        this.#manager=manager
        this.#tbody=createTable(document.body,(row)=>{
            for(const cim of headerArry){
                const th = document.createElement('th')
                th.innerText=cim.name
                row.appendChild(th)
                if(cim.colspan){th.colSpan=2}
            }
        })
    }
    /**
     * 
     * @param {TAbleCB} callback 
     */
    setAppendRow(callback){
        this.#manager.addElement=(elem)=>{callback(this.#tbody,elem)}
    }
}

export {Table}