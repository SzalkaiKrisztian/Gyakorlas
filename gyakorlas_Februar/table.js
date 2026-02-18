import { Manager } from "./manager.js";
import { createTable } from "./functions.js";
/**
 * @import {HeaderArrayType} from './functions.js'
 * @callback Tablecallback
 * @param {import("./functions.js").ColspanType | import("./functions.js").RowspanType}
 * @returns {void}
 */

class Table{
    /**@type {HTMLTableSectionElement} */
    #tbody;
    /**@type {Manager}*/
    #manager;
    /**
     * 
     * @param {HeaderArrayType} headerArry
     * @param {Manager} manager 
     */
    constructor(headerArry,manager){
        this.#manager=manager
        this.#tbody=createTable(document.body,function(row){
            for(const cim of headerArry){
                const th= document.createElement('th')
                th.innerText=cim.name
                row.appendChild(th)
                if(cim.colspan){th.colSpan=2}
            }
        })
    }
    /**
     * 
     * @param {Tablecallback} callback 
     */
    setAppendRow(callback){
        this.#manager.addCallBack=(elem)=>{callback(this.#tbody,elem)}
    }
}
export {Table}