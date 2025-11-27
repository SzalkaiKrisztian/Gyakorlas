//----------------------------------------Table generalasa:-------------------------------->
/** @type {TableArry[]} */
const TableArr=[
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
generateFrame("jsSection","jsBody",["Ókori település","Ágazat","Példa"])
generateTableBody(TableArr)
//----------------------------------------Checkbox--------------------------------------->
Check()
//-------------------------------------1. commit-------------------------------------------