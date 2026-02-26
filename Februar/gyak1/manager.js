/**
 * @callback addCallback
 * @param {import("./functions").ColspanType | import("./functions").RowspanType} type
 * @returns {void}
 */

class Manager{
    /**@type {import("./functions").ColspanType[] | import("./functions").RowspanType[]} */
    #dataArry;
    /**@type {addCallback} */
    #addCallback;
    /**@param {addCallback} value  */
    set addCallback(value){
        this.#addCallback=value
    }
    constructor(){
        this.#dataArry=[]
    }
    /**
     * 
     * @param {import("./functions").ColspanType | import("./functions").RowspanType} colRow 
     * @returns {void}
     */
    addElement(colRow){
        this.#dataArry.push(colRow)
        if(this.#addCallback){this.#addCallback(colRow)}
    }
}

export {Manager}