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
//-------------------------------------Eventlisteners--------------------------------->
htmlForm.addEventListener("submit",addToHtmlTable)
jsForm.addEventListener("submit",function(e){
    e.preventDefault()

    /**@type {HTMLFormElement} */
    const target=e.target

    /**@type {TableArry} */
    const obj ={}

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

    if(validate3Fields(helyInput,ag1Input,pl1Input)){
        //3 alap kötelező kész, de ha van 4. vagy 5. akkor kötelező a másik!
        let seged = true//alapból lefut 3 kotelezővel mert true
        if(ag2Input.value){//van e benne szoveg
            if(validField(pl2Input,"kötelező ha adsz masik agazatot!") == false){seged=false}
        }else if(pl2Input.value){// van e benne szöveg
            if(validField(ag2Input,"kötelező ha adsz masik peldat!") ==false){seged=false}
        }

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

        obj.hely=helyString
        obj.ag1=ag1String
        obj.pl1=pl1String
        pl2String==''? obj.pl2=undefined : obj.pl2=pl2String
        ag2String==''? obj.ag2=undefined : obj.ag2=ag2String
        if(seged){//alapból true
            tableArr.push(obj)
            generateTableBody(tableArr)
            jsForm.reset()
        }
    }
})
