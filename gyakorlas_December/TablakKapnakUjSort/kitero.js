//-----------------------------------Table--------------------------------------->
/**@type {TablaArryTipus[]} */
const arrTable=[
    {
        nemzet: "Orosz",
        szerzo: "Gogol",
        mu: "Köpönyeg",
        szerzo2: "Csehov",
        mu2: "Csinovnyik halála"
    },{
        nemzet: "Cseh",
        szerzo: "Franz Kafka",
        mu: "az Átváltozás"
    },{
        nemzet: "Magyar",
        szerzo: "Örmény István",
        mu: "egyperces Novellák",
        szerzo2: "Jozsef Attila",
        mu2: "Klárisok"
    },{
        nemzet: "Svájc",
        szerzo: "Frederich Dörrenmatt",
        mu: "A fizikusok"
    }
]
createTable("jsTable",["Nemzetiség","Szerző","Mű"])
createTableBody(arrTable)
//-------------------------------------Form-------------------------------------->
/**@type {FormArryTipus[]} */
const arrForm=[
    {
        txt:"Nemzetiseg:",
        tag:"nemzetiseg"
    },
    {
        txt:"Szerző:",
        tag:"szerzo1"
    },
    {
        txt:"Mű:",
        tag:"mu1"
    },
    {
        txt:"Másik Szerző:",
        tag:"szerzo2"
    },
    {
        txt:"Mű:",
        tag:"mu2"
    },
]
const jsForm =createForm("jsForm",arrForm)
const htmlForm = document.getElementById('htmlForm')
//--------------------------------------Eventlisteners------------------------------------->
htmlForm.addEventListener('submit',addTableRowToTable)
jsForm.addEventListener('submit',function(e){
    e.preventDefault()
    /**@type {HTMLFormElement} */
    const target =e.target

    //-------------------------------------Lekerem az inputokat------------------------>
    /**@type {HTMLInputElement} */
    const nemzetisegInput = target.querySelector('#nemzetiseg')
    /**@type {HTMLInputElement} */
    const szerzo1Input = target.querySelector('#szerzo1')
    /**@type {HTMLInputElement} */
    const mu1Input = target.querySelector('#mu1')
    /**@type {HTMLInputElement} */
    const szerzo2Input = target.querySelector('#szerzo2')
    /**@type {HTMLInputElement} */
    const mu2Input = target.querySelector('#mu2')

    if(validFields(nemzetisegInput,szerzo1Input,mu1Input)){
        //----------------------------------------string típusuvá állitjuk az inputokat--------------->
        /**@type {string} */
        const nemzetisegInputString = nemzetisegInput.value
        /**@type {string} */
        const szerzo1InputString = szerzo1Input.value
        /**@type {string}*/
        const mu1InputString =mu1Input.value
        /**@type {string} */
        const szerzo2InputString = szerzo2Input.value
        /**@type {string}*/
        const mu2InputString =mu2Input.value

        //----------------------------Feltöltjük a stringeket egy objektumba----------------------->
        /**@type {TableArryTipus} */
        const obj ={}
        obj.nemzet=nemzetisegInputString
        obj.szerzo=szerzo1InputString
        obj.mu=mu1InputString
        //-----ha üres akkor undefined-ra sllitjuk az objektumban (obj)-------------->
        szerzo2InputString =='' ? obj.szerzo2=undefined : obj.szerzo2=szerzo2InputString
        mu2InputString == '' ? obj.mu2 = undefined : obj.mu2=mu2InputString

        //---------------------------------Hozzáadás------------------------------------------------------->
        arrTable.push(obj)
        createTableBody(arrTable)
        console.log(arrTable)
    }
})