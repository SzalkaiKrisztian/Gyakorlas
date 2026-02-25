
import { Manager } from "./manager";
import { Table } from "./table";
import data from "./data.json" with{type:"json"}
import { tbodyRenderColspan } from "./functions";
import {FormController} from "./form.js"

const manager = new Manager()
const colTable = new Table(data.colspanHeaderArray,manager)
colTable.setAppendRow(tbodyRenderColspan)
for(const dat of data.colspanDataArr){
    manager.addElement(data)
}
FormController(data.colspanFormFieldList)