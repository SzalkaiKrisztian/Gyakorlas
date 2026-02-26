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
     * @param {import("./functions").ColspanType | import("./functions").RowspanType} colrow 
     * @returns {void}
     */
    addElement(colrow){
        this.#dataArry.push(colrow)
        if(this.#addCallback){this.#addCallback(colrow)}
    }
}
export {Manager}