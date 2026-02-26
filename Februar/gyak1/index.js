import { Manager } from "./manager.js";
import { Table } from "./table.js";
import data from './data.json' with{type:"json"}
import { tbodyRenderColspan, tbodyRenderRowspan } from "./functions.js";
import { FormController } from "./form.js";
//col
const colManager = new Manager()
const colTable = new Table(data.colspanHeaderArray,colManager)
colTable.setAppendRow(tbodyRenderColspan)
for(const adat of data.colspanDataArr){
    colManager.addElement(adat)
}
const colForm =new FormController(data.colspanFormFieldList,colManager)
console.log(colForm)
//Row
const rowManager = new Manager()
const rowTable = new Table(data.rowspanHeaderArray,rowManager)
rowTable.setAppendRow(tbodyRenderRowspan)
for(const adat of data.rowspanTableArray){
    rowManager.addElement(adat)
}
const rowForm = new FormController(data.rowspanFormFieldList,rowManager)
console.log(rowForm)