/**
 * @callback addCallback
 * @param {import("./functions").ColSpanType | import("./functions").RowSpanType} type
 * @returns {void}
 */

class Manager{
    /**@type {import("./functions").ColSpanType | import("./functions").RowSpanType} */
    #dataArry;
    /**@type {addCallback} */
    #addCallBack;
    /**
     * @param {addCallback} value 
     */
    set addCallback(value){
        this.#addCallBack=value
    }
    constructor(){
        this.#dataArry=[]
    }
    /**
     * 
     * @param {import("./functions").ColSpanType | import("./functions").RowSpanType} colrow 
     * @returns {void}
     */
    addElement(colrow){
        this.#dataArry.push(colrow)
        if(this.#addCallBack){this.#addCallBack(colrow)}
    }
}

export {Manager}