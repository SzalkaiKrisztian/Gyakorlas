/**
 * @import {ColspanType,RowspanType} from './functions.js'
 * 
 * @callback addCallBack
 * @param {ColspanType | RowspanType}
 * @returns {void}
 */

class Manager{
    /**@type {ColspanType[] | RowspanType[]} */
    #dataArry;
    /**@type {addCallBack} */
    #addCallback;
    /**@param {addCallBack} value  */
    set addCallBack(value){
        this.#addCallback=value
    }
    constructor(){
        this.#dataArry=[]
    }
    /**
     * @param {colRowType | RowspanType} colRowType 
     * @returns {void}
     */
    addElement(colRowType){
        this.#dataArry.push(colRowType)
        if(this.#addCallback){this.addCallBack(colRowType)}
    }
}
export {Manager}