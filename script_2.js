// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//   Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//    Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// lista oggeti squad
const squad1 = {
    nome: "benevento",
    puntiFatti: 0,
    faliSubiti: 0
}
const squad2 = {
    nome: "chievoVerona",
    puntiFatti: 0,
    faliSubiti: 0
}
const squad3 = {
    nome: "cittadella",
    puntiFatti: 0,
    faliSubiti: 0
}
const squad4 = {
    nome: "cosenza",
    puntiFatti: 0,
    faliSubiti: 0
}

// array contenitore squad
const listaquadre = [squad1, squad2, squad3, squad4]
// funzione random 1-100
const generaPunti = () => Math.floor(Math.random() * 100) + 1;
// seccondo array che contiene nome squad e statistica fali 
const statistica = []
console.log(statistica);
// output page html
const squadH1 = document.getElementById("squad")
// cilo  lista squadre con codizione & push nel nuovo Array "statistica"
for (let i = 0; i < listaquadre.length; i++) {
    let element = listaquadre[i];

    element.puntiFatti += generaPunti()
    element.faliSubiti += generaPunti()
    console.log(`le squadre sono: ${element.nome} - i loro punti fatti sono ${element.puntiFatti} - con falli subiti ${element.faliSubiti}`);
    if (element.puntiFatti >= 0) {
        statistica.push(`squad: ${element.nome} --- statistica fali: ${element.puntiFatti} `)
        squadH1.innerHTML += `<h2>squad: ${element.nome} --- statistica fali: ${element.puntiFatti} </h2>`
    }
}
// ciclo nuovo array 
for (let j = 0; j < statistica.length; j++) {
    const listaStatistica = statistica[j];
    console.log(`${listaStatistica}`);

}