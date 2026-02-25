import { createForm, createInputField } from "./functions.js";
import { Manager } from "./manager.js";


class FormController{
    /**@type {Manager} */
    #manager;
    /**@type {FormField[]} */
    #FormFieldElemList;
    /**@type {HTMLFormElement} */
    #form;
    /**
     * 
     * @param {import("./functions").FormFieldType[]} FormFieldList 
     * @param {Manager} manager 
     */
    constructor(FormFieldList,manager){
        this.#manager=manager
        this.#FormFieldElemList=[]
        this.#form=createForm((e)=>{
            document.body.appendChild(e)
            for(const f of FormFieldList){
                const fElem= new FormField(f.id,f.name,f.label,f.required,e)
                this.#FormFieldElemList.push(fElem)
            }
        },(e)=>{
            e.preventDefault()
            const elem = this.#createElement()
            if(elem){
                this.#manager.addElement(elem)
                /**@type {HTMLFormElement} */
                const target = e.target
                target.reset()
            }
        });
    }
    /**
     * @returns {import("./functions").ColspanType | import("./functions").RowspanType}
     */
    #createElement(){
        let result={}
        let valid = true
        for(const inputField of this.#FormFieldElemList){
            if(inputField.validate()){
                result[inputField.name] =inputField.value
            }else{
                valid=false
            }
        }
        if(valid){
            return result;
        }else{
            return null
        }
    }
}

class FormField{
    /**@type {HTMLInputElement} */
    #input;
    get value(){
        return this.#input.value ? this.#input.value :undefined;
    }
    /**@type {string} */
    #name;
    get name(){
        return this.#name;
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
        this.#name=name;
        this.#required=required;
        const {errorElement, input} =createInputField({id,name,labelContent,parent})
        this.#errorElement=errorElement
        this.#input=input
    }
    /**@returns {boolean} */
    validate(){
        let valid = true
        if(this.#required && !this.value){
            valid=false
            this.#errorElement.innerText="kotelezo!"
        }else{
            this.#errorElement.innerText=''
        }
        return valid;
    }
}

export {FormController}