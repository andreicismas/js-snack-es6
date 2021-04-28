// Snack 3
// Scrivere una funzione che accetti tre argomenti,
//  un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//  Usiamo i nuovi metodi degli array foreach o filter.

// array numeri
const arrayNumber = [21, 23, 45, 32, 67, 54, 32,]
console.log(arrayNumber);


// comento funzione
/**
 * 
 * @param {[]} arrayNumber 
 * @param {(indiceStart)} startIndex 
 * @param {(indiceEnd)} endIndex 
 * @returns 
 */
function sublist(array, startIndex, endIndex) {
    return array.filter((element, index) => index > startIndex && index < endIndex);

}
console.log(sublist(arrayNumber, 1, 7))