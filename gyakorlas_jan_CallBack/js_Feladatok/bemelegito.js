/**
 * @typedef {{szoveg:string, szam:number}[]} tombType
 * @callback VisszaHiv
 * @param {{szoveg:string, szam:number}} objresz
 */
class Osztaly{
    #tomb;
    get tomb(){
        return this.#tomb
    }
    /**@param {tombType} tomb  */
    constructor(tomb){
        this.#tomb=tomb
    }
    /**
     * 
     * @param {VisszaHiv} callBack 
     * @returns {void}
     */
    method(callBack){
        for(let i=0; i<this.#tomb.length;i++){
            callBack(this.#tomb[i])
        }
    }
}

//----------------------------------------
/**
 * @type {tombType}
 */
const tomb=[
    {
        szoveg:"asd",
        szam: 2
    }
]

const peldany = new Osztaly(tomb)


peldany.method(function(elem){
    elem.szam=0
    
})
console.log(peldany)