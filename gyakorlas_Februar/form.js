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
        this.FormFieldList=[]
        this.#form=createForm(function(e){
            for(const f of FormFieldList){
                const fElem= new FormField(f.id,f.name,f.label,f.required,this.e)
                
            }
        },function(e){

        });
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
     * @param {string} labelcontent 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id,name,labelcontent,required,parent){
        this.#name=name;
        this.#required=required;
        (this.#errorElement,this.#input)=createInputField(id,name,labelcontent,parent)
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