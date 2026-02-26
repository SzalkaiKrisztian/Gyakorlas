import { createForm } from "./functions.js";
import { createInputField } from "./functions.js";
import { Manager } from "./manager.js";


class FormField{
    /**@type {HTMLInputElement} */
    #input;
    get value(){
        return this.#input.value ? this.#input.value : undefined
    }
    /**@type {string} */
    #name;
    get name(){
        return this.#name
    }
    /**@type {boolean} */
    #required;
    /**@type {HTMLDivElement} */
    #errorElement;
    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} labelContent 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id,name,labelContent,required,parent){
        this.#name=name
        this.#required=required
        const {errorElement, input}=createInputField({id,name,labelContent,parent})
        this.#errorElement=errorElement
        this.#input=input
    }
    /**
     * @returns {boolean}
     */
    validate(){
        let valid = true
        if(this.#required && !this.value){
            valid=false
            this.#errorElement.innerText="kötelező!"
        }else{
            this.#errorElement.innerText=""
        }
        return valid;
    }
}

class FormController{
    /**@type {Manager} */
    #manager;
    /**@type {FormField[]} */
    #FormFieldElemList;
    /**
     * 
     * @param {import("./functions").FormFieldType[]} formFieldList 
     * @param {Manager} manager 
     */
    constructor(formFieldList,manager){
        this.#manager=manager
        this.#FormFieldElemList=[]
        createForm((e)=>{
            document.body.appendChild(e)
            for(const f of formFieldList){
            const elem = new FormField(f.id,f.name,f.label,f.required,e)
            this.#FormFieldElemList.push(elem)
        }
        },(e)=>{
            e.preventDefault()
            const element = this.#createElement()
            if(element){
                this.#manager.addElement(element)
                /**@type {HTMLFormElement} */
                const target = e.target
                target.reset()
            }
        })
    }
    /**
     * @returns {import("./functions").ColspanType | import("./functions").RowspanType} 
     * */
    #createElement(){
        let result = {}
        let valid=true
        for(const formField of this.#FormFieldElemList){
            if(formField.validate()){
                result[formField.name] = formField.value
            }else{
                valid=false
            }  
        }
        if(valid){
            return result
        }else{
            return null
        }
    }
}

export {FormController}