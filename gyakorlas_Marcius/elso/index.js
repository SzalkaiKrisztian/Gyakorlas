const autoArr = [
    {
        name: 'A autó',
        brand: 'Ford',
        color: "piros",
        price: 2
    },
    {
        name: 'B autó',
        brand: 'BMW',
        color: "zöld",
        price: 63
    },
    {
        name: 'C autó',
        brand: 'BMW',
        color: "piros",
        price: 18
    },
    {
        name: 'D autó',
        brand: 'Opel',
        color: "piros",
        price: 17
    },
    {
        name: 'E autó',
        brand: 'Mercedes',
        color: "kék",
        price: 19
    },
    {
        name: 'F autó',
        brand: 'Ford',
        color: "kék",
        price: 9
    }
]
//1
let osszeg =0
for(const resz of autoArr){
    osszeg+=resz.price
}
console.log(osszeg)

//2
let pasz=0
for(const b of autoArr){
    if(b.color=="piros"){
        pasz++
    }
}
console.log(pasz)

//3
const Mercedesek=[]
for(const c of autoArr){
    if(c.brand=="Mercedes"){
        Mercedesek.push(c)//c.brand hogyha csak a marka kell
    }
}
console.log(Mercedesek)

//4
const olcsofordok=[]//elmeletileg lehetne tobb is
for(const d of autoArr){
    if(d.brand=="Ford" && d.price<5){
        olcsofordok.push(d)
    }
}
console.log(olcsofordok)

//5
let min=autoArr[0]
for(const e of autoArr){
    if(e.price < min){
        min = e.price
    }
}
console.log(min)

//6
for(let i =0; i< autoArr.length-1; i++){
    for(let j=i+1; j<autoArr.length;j++){
        if(autoArr[i].price<autoArr[j].price){
            const seged = autoArr[i]
            autoArr[i] =autoArr[j]
            autoArr[j] = seged
        }
    }
}
console.log(autoArr)