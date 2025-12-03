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
htmlFrom.addEventListener("submit",addToHtmlTable)
jsForm.addEventListener("submit",function(e){
    e.preventDefault()

    /**@type {HTMLFormElement} */
    const target = e.target

    /**@type {TableRow} */
    const obj = {}

    /**@type {HTMLInputElement} */
    const helyInput = target.querySelector('#elso')
    /**@type {HTMLInputElement} */
    const ag1Input = target.querySelector('#masodik')
    /**@type {HTMLInputElement} */
    const pl1Input = target.querySelector('#harmadik')
    /**@type {HTMLInputElement} */
    const ag2Input = target.querySelector('#negyedik')
    /**@type {HTMLInputElement} */
    const pl2Input = target.querySelector('#otodik')

    if (validateFields(helyInput, ag1Input, pl1Input)) {
        let lefut = true
        if (ag2Input.value) {
            if (validField(pl2Input, "kötelező kitölteni!") == false) { lefut = false }
        } else if (pl2Input.value) {
            if (validField(ag2Input, "kötelező kitölkteni!") == false) { lefut = false }
        }
        if (lefut) {
            /**@type {string} */
            const helyString = helyInput.value
            /**@type {string} */
            const ag1String = ag1Input.value
            /**@type {string} */
            const pl1String = pl1Input.value
            /**@type {string} */
            const ag2String = ag2Input.value
            /**@type {string} */
            const pl2String = pl2Input.value

            obj.hely = helyString
            obj.agazat1 = ag1String
            obj.pelda1 = pl1String
            ag2String == "" ? obj.agazat2 = undefined : obj.agazat2 = ag2String
            pl2String == "" ? obj.pelda2 = undefined : obj.pelda2 = pl2String

            jsTableArr.push(obj)
            createTableBody(jsTableArr)
            jsForm.reset()
        }
    }
})