//----------------------------------------------TAble létrehozása------------------------------->
/**@type {TableRow[]}*/
const jsTableArr = [
    {
        hely:"Athén",
        agazat1:"politika",
        pelda1:"demokrácia",
        agazat2:"tudomány",
        pelda2:"filozófia"
    },
    {
        hely:"Egyiptom",
        agazat1:"mezőgazdaság",
        pelda1:"csatornák"
    },
    {
        hely:"Spárta",
        agazat1:"neveléstudomány",
        pelda1:"agogé",
        agazat2:"harcászat",
        pelda2:"hoplita"
    }
]
createFrame("jsoption","jsbody",["Ókori Település","Ágazat","Példa"],jsTableArr)
//----------------------------------------------Check létrehozása------------------------------->
OptionSelected()
//----------------------------------------------Form létrehozása------------------------------->

//----------------------------------------------EventListener létrehozása------------------------------->