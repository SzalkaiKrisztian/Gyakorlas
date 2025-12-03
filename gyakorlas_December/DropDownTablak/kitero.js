//----------------------------------------------TAble létrehozása------------------------------->
/**@type {TableRow[]}*/
const jsTableArr = [
    {
        hely: "Athén",
        agazat1: "politika",
        pelda1: "demokrácia",
        agazat2: "tudomány",
        pelda2: "filozófia"
    },
    {
        hely: "Egyiptom",
        agazat1: "mezőgazdaság",
        pelda1: "csatornák"
    },
    {
        hely: "Spárta",
        agazat1: "neveléstudomány",
        pelda1: "agogé",
        agazat2: "harcászat",
        pelda2: "hoplita"
    }
]
createFrame("jsoption", "jsbody", ["Ókori Település", "Ágazat", "Példa"], jsTableArr)
//----------------------------------------------Check létrehozása------------------------------->
OptionSelected()
//----------------------------------------------Form létrehozása------------------------------->
/**@type {FormDivData[]} */
const jsFormArr = [
    {
        txt:"Ókori Település",
        lIId:"elso",
        iName:"hely"
    },
    {
        txt:"Ágazat",
        lIId:"masodik",
        iName:"ag1"
    },
    {
        txt:"Példa",
        lIId:"harmadik",
        iName:"pl1"
    },
    {   
        txt:"Másik Ágazat",
        lIId:"negyedik",
        iName:"ag2"
    },
    {
        txt:"Másik Példa",
        lIId:"otodik",
        iName:"pl2"
    }

]
const jsForm = createForm("jsform",jsFormArr)
const htmlFrom = document.getElementById('htmlform')
//----------------------------------------------EventListener létrehozása------------------------------->