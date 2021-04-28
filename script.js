
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const bici1 = {
    nome: "Bici Da Città",
    peso: 20
}
const bici2 = {
    nome: "Mountain Bike",
    peso: 50
}
const bici3 = {
    nome: "Bici Da Corsa",
    peso: 23
}
const bici4 = {
    nome: "Bici Da Cicloturismo",
    peso: 12
}
const bici5 = {
    nome: "Bici Ibrida",
    peso: 32
}
const bici6 = {
    nome: "Bicia Scatto Fisso",
    peso: 31
}
const bici7 = {
    nome: "Bici Pieghevole",
    peso: 15
}
const bici8 = {
    nome: "Bici Da Ciclocross",
    peso: 68
}
const bici9 = {
    nome: "Gravel Bike",
    peso: 25
}
const bici10 = {
    nome: "Fat Bike 10",
    peso: 29
}
// array lista bici 
const listaBici = [bici1, bici2, bici3, bici4, bici5, bici6, bici7, bici8, bici9, bici10]
console.log(listaBici);
// SOLUZIONE MIGLIORE CON LA FUNXTION

// ********************************************************************************************************
const findMinBike = (arayList) => {
    let biciLegera;
    for (let i = 0; i < arayList.length; i++) {
        const { nome, peso } = arayList[i];

        if (!biciLegera || peso < biciLegera.peso) {
            biciLegera = {
                nome,
                peso
            }
        }

    }
    return biciLegera
}

const biciLegeraTrovata = findMinBike(listaBici)

console.log(biciLegeraTrovata);

console.log(`La bici che pesa di meno e la :${biciLegeraTrovata.nome} peso ${biciLegeraTrovata.peso} kg`);

const elementH1 = document.getElementById("small_weight")
elementH1.innerHTML = `La bici che pesa di meno e la : ${biciLegeraTrovata.nome} peso ${biciLegeraTrovata.peso} kg`
// ********************************************************************************************************

// SOLUZIONE SEMPLICE E PIGRA


// // uso destructuring e template literal
// const { nome, peso } = bici4

// // ciclo con il arrai lista bici
// for (let i = 0; i < listaBici.length; i++) {
    //     const element = listaBici[i];
    //     const elementH1 = document.getElementById("small_weight")
    
//     if (element.peso < 15) {
//         console.log(`La bici che pesa di meno e la :${element.nome} peso ${element.peso} kg`);
//         elementH1.innerHTML = `La bici che pesa di meno e la : ${element.nome} peso ${element.peso} kg`
//     }

// }


// mi sfuge una cosa come faccio a trovare la bici che pesa di meno senza che io so /non vedo i pesi delle bici 

// che in questo caso io la bici che pesa di meno lo creata io ?

