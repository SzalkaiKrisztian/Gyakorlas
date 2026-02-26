import { createForm, createInputField } from "./functions.js";
import { Manager } from "./manager.js";


class FormField{
    /**@type {HTMLInputElement} */
    #input;
    get value(){
        return this.#input.value ? this.#input.value: undefined
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
        const {errorElement, input}=createInputField({id,name,labelContent,parent})
        this.#input=input
        this.#errorElement=errorElement
        this.#required=required
        this.#name=name
    }
    /**@returns {boolean} */
    validate(){
        let valid = true
        if(this.#required && !this.value){
            valid=false
            this.#errorElement.innerText='kotelezo'
        }else{
            this.#errorElement.innerText=''
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
     * @param {import("./functions").FormFieldType[]} FormFieldList 
     * @param {Manager} manager 
     */
    constructor(FormFieldList, manager){
        this.#FormFieldElemList=[]
        this.#manager=manager
        createForm((e)=>{
            document.body.appendChild(e)
            for(const f of FormFieldList){
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
        let valid=true
        let result={}
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