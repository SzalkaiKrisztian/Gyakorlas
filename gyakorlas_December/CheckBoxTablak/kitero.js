//----------------------------------------Table generalasa:-------------------------------->
/** @type {TableArry[]} */
const tableArr=[
    {
        hely:"Athén",
        ag1:"politika",
        pl1:"demokrácia",
        ag2:"tudomány",
        pl2:"filozófia"
    },
    {
        hely:"Egyiptom",
        ag1:"mezőgazdaság",
        pl1:"csatornák"
    },
    {
        hely:"Spárta",
        ag1:"neveléstudomány",
        pl1:"agogé",
        ag2:"harcászat",
        pl2:"hoplita"
    }
]
generateFrame("jssection","jsbody",["Ókori település","Ágazat","Példa"])
generateTableBody(tableArr)
//----------------------------------------Checkbox--------------------------------------->
Check()
//-------------------------------------1. commit-------------------------------------------
//----------------------------------------Form generalasa:-------------------------------->
/**@type {FormArry[]} */
const FormArr = [
    {
        forId:"elso",
        txt:"Ókori település",
        inpName:"hely"
    },
    {
        forId:"masodik",
        txt:"Ágazat",
        inpName:"ag1"
    },
    {
        forId:"harmadik",
        txt:"Példa",
        inpName:"pl1"
    },
    {
        forId:"negyedik",
        txt:"Másik Ágazat",
        inpName:"ag2"
    },
    {
        forId:"otodik",
        txt:"Másik Példa",
        inpName:"pl2"
    }
]
const htmlForm=document.getElementById('htmlform')
const jsForm=generateForm("jsform",FormArr)
//-------------------------------------2. commit-------------------------------------->