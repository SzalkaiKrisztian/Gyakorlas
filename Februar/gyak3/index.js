import data from './data.json' with{type:"json"}
import { FormController } from './form.js'
import { tbodyRenderColspan, tbodyRenderRowspan } from './functions.js'
import { Manager } from './manager.js'
import { Table } from './table.js'

const colManager = new Manager()
const colTable = new Table(data.colspanHeaderArray,colManager)
colTable.setAppendRow(tbodyRenderColspan)
for(const adat of data.colspanDataArr){
    colManager.addElement(adat)
}
new FormController(data.colspanFormFieldList,colManager)
//
const rowManager = new Manager()
const rowTable = new Table(data.rowspanHeaderArray,rowManager)
rowTable.setAppendRow(tbodyRenderRowspan)
for(const adat of data.rowspanTableArray){
    rowManager.addElement(adat)
}
new FormController(data.rowspanFormFieldList,rowManager)