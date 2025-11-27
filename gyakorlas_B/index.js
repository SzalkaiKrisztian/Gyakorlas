/**
 * @type {{szerzo:string,mu:string, szerzo1:string,szerzo2?:string}[]}
 */
const arr =[
    {
        szerzo:'Katona József',
        mu:'bánk bán',
        szereplo1:'Gertrudius királyné',
    },{
        szerzo:'Mikszáth Kálmán',
        mu:'beszterce ostroma',
        szereplo1:'Pondrác István gróf',
        szereplo2:'Estella'
    },{
        szerzo:'Arany János',
        mu:'Toldi',
        szereplo1:'Toldi Miklosé',
    }
]
const table =document.createElement('table')
document.body.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)

const trHead = document.createElement('tr')
thead.appendChild(trHead)

const tomb =["Szerző","Mű","Szereplők"]
for(let i =0; i<tomb.length;i++){
    const th = document.createElement('th')
    th.innerText=tomb[i]
    trHead.appendChild(th)
    if(i %2 ==0 && i != 0){
        th.colSpan=2
    }
}

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const seged of arr){
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td1 = document.createElement('td')
    td1.innerText=seged.szerzo
    tr.appendChild(td1)

    const td2 = document.createElement('td')
    td2.innerText=seged.mu
    tr.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerText=seged.szereplo1
    tr.appendChild(td3)

    if(seged.szereplo2 !== undefined){
        const td4 = document.createElement('td')
        td4.innerText=seged.szereplo2
        tr.appendChild(td4)
    }else{
        td3.colSpan=2
    }
}