
import { Manager } from "./manager.js";
import { Table } from "./table.js";
import data from "./data.json" with{type:"json"}
import { tbodyRenderColspan, tbodyRenderRowspan } from "./functions.js";
import {FormController} from "./form.js"
//---------------------------------------------Col
const colManager = new Manager()
const colTable = new Table(data.colspanHeaderArray,colManager)
colTable.setAppendRow(tbodyRenderColspan)
for(const dat of data.colspanDataArr){
    colManager.addElement(dat)
}
const cForm= new FormController(data.colspanFormFieldList,colManager)
console.log(cForm)
//---------------------------------------------Row
const rowManager = new Manager()
const rowTable = new Table(data.rowspanHeaderArray,rowManager)
rowTable.setAppendRow(tbodyRenderRowspan)
for(const dat of data.rowspanTableArray){
    rowManager.addElement(dat)
}
const rForm =new FormController(data.rowspanFormFieldList,rowManager)
console.log(rForm)