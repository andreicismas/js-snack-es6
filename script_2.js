// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//   Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//    Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
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
const listaquadre = [squad1, squad2, squad3, squad4]

const generaPunti = () => Math.floor(Math.random() * 100) + 1;


console.log(`il nostro nr random:${generaPunti()}`);

for (let i = 0; i < listaquadre.length; i++) {
    const element = listaquadre[i];

    element.puntiFatti += generaPunti()
    element.faliSubiti += generaPunti()
    console.log(`le squadre sono: ${element.nome} - i loro punti fatti sono ${element.puntiFatti} - con falli subiti ${element.faliSubiti}`);

}
