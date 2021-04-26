
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const bici1 = {
    nome: "biciDaCittà",
    peso: 20
}
const bici2 = {
    nome: "mountainBike",
    peso: 50
}
const bici3 = {
    nome: "biciDaCorsa",
    peso: 23
}
const bici4 = {
    nome: "biciDaCicloturismo",
    peso: 12
}
const bici5 = {
    nome: "biciIbrida",
    peso: 32
}
const bici6 = {
    nome: "biciaScattoFisso",
    peso: 31
}
const bici7 = {
    nome: "biciPieghevole",
    peso: 15
}
const bici8 = {
    nome: "biciDaCiclocross",
    peso: 68
}
const bici9 = {
    nome: "gravelBike",
    peso: 25
}
const bici10 = {
    nome: "fatBike10",
    peso: 29
}
// array lista bici 
const listaBici = [bici1, bici2, bici3, bici4, bici5, bici6, bici7, bici8, bici9, bici10]

// uso destructuring e template literal
const { nome, peso } = bici4
console.log(`la bici che pesa di meno e la :${nome} peso ${peso} kg`);


// ciclo con nuovi nomi variabbili
for (let i = 0; i < listaBici.length; i++) {
    const element = listaBici[i];

    if (element.peso < 15) {
        console.log(`la bici che pesa di meno e la :${element.nome} peso ${element.peso} kg`);
    }

}

// mi sfuge una cosa come faccio a trovare la bici che pesa di meno senza che io so /non vedo i pesi delle bici 

// che in questo caso io la bici che pesa di meno lo creata io ?

