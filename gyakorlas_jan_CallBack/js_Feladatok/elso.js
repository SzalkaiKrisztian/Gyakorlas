/**
 * @typedef {{szoveg:string, szam:number}[]} tombType
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