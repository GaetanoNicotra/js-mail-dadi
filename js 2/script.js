// SECONDO ESERCIZIO: DADI

let numberUtente = prompt('Inserisci un numero da 1 a 6')
console.log(numberUtente + ' ' + "Numero dell'utente")

let numberComputer = Math.random();
console.log(Math.floor(Math.random() * 6) + 1 + ' ' + "Numero del computer")

if (numberUtente > numberComputer) {
    console.log('L\'utente ha vinto')
}

else if (numberUtente < numberComputer) {
    console.log('Il computer ha vinto')
}
else{
    console.log('Pareggio')
}
