const cipoArr = [
    {
        name: 'A cipő',
        size: 36,
        color: "piros",
        price: 12000
    },
    {
        name: 'B cipő',
        size: 38,
        color: "zöld",
        price: 6300
    },
    {
        name: 'C cipő',
        size: 32,
        color: "piros",
        price: 18000
    },
    {
        name: 'D cipő',
        size: 40,
        color: "piros",
        price: 17000
    },
    {
        name: 'E cipő',
        size: 34,
        color: "kék",
        price: 19000
    },
    {
        name: 'F cipő',
        size: 37,
        color: "kék",
        price: 9000
    }
]
//Összegezze a cipők árait!
let osszeg = 0
for(const a of cipoArr){
    osszeg+=a.price
}
console.log(osszeg)

//Számolja meg a kék cipőket!
let kekcipok=0
for(const b of cipoArr){
    if(b.color=="kék"){
        kekcipok++
    }
}
console.log(kekcipok)

//Válogassa ki a piros cipőket!
const piroscipok=[]
for(const c of cipoArr){
    if(c.color=="piros"){
        piroscipok.push(c)
    }
}
console.log(piroscipok)

//Keresse meg azt a cipőt, aminek a mérete nagyobb 37-nél és a színe zöld!
const z38=[]
for(const d of cipoArr){
    if(d.color=="zöld" && d.size>37){
        z38.push(d)
    }
}
console.log(z38)

//Keresse meg a legdrágább cipőt!
let max = cipoArr[0]
for(const e of cipoArr){
    if(e.price> max){
        max=e.price
    }
}
console.log(max)

//Rendezze a tömböt méret szerint csökkenő sorrendbe!
for(let i=0; i<cipoArr.length-1;i++){
    for(let j=i+1; j<cipoArr.length;j++){
        if(cipoArr[i].size > cipoArr[j].size){
            const seged = cipoArr[i]
            cipoArr[i] = cipoArr[j]
            cipoArr[j] = seged
        }
    }
}
console.log(cipoArr)
