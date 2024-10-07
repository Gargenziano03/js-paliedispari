/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione) Dichiariamo chi ha vinto.
*/

/* PRE-FASE: STRUMENTI 
-- let / const 
-- prompt
-- .random
--if / else if / else 
-- function

*/

//FASE 1: PREPARAZIONE 
let scelta ;
let numeroUtente;
let numeroComputer; 
let messagge;

//FASE 2: RACCOLTA DATI 
// l'utente sceglie pari o dispari
scelta = prompt('Scegli pari o dispari');
alert(scelta);
console.log(scelta);
// l'utente  inserisce un numero da 1 a 5
numeroUtente = Number(prompt('scegli un numero da 1 a 5'));



//FASE 3: ELABORAZIONE DATI
function maggioreMinore(numeroUtente) {
    // verifica se l' elemento non è un numero
    if(!isNaN(numeroUtente) ){
        // verifica se il numero inserito è maggiore o 1 ANd
        // se il numeri inserito è minore o unguale a 5
        // se riusculta falso 
        if ( numeroUtente >= 1 && numeroUtente <= 5) {
            alert(numeroUtente);
            console.log(numeroUtente)
        // allora stampa il numero deve essere compreso tra 1 e 5
        }else{
            alert('il numero deve essere compreso tra 1 e 5')
        }
    //se non è un numero stampa il messaggio
    }else{
        messagge = 'elemento inserito non valido';
        alert(messagge);
        console.log(messagge);
    }   
}
maggioreMinore(numeroUtente);

function numeroRandom(numeroComputer) {
    //numero casuale da 1 a 5 per il computer 
    numeroComputer = Math.floor(Math.random() *5) + 1;
    //stampa il numero casuale per il computer
    alert(`il numero del computer è: ${numeroComputer}`);
    console.log(numeroComputer);
    
}
numeroRandom(numeroComputer);

function sumPariDispari(numeroUtente, numeroComputer) {
    //somma numero dell'utente e del computer 
    let somma = numeroUtente + numeroComputer;
    let risultato = somma;
    // Verificare se la somma è pari 
    if (risultato % 2 == 0){
        // stampa è pari in caso sia vero
        alert(`${risultato} è pari`);
        // altrimenti
    }else{
        //stampa dispari
        alert(`${risultato} è dispari`);
    }
}
sumPariDispari(numeroUtente, numeroComputer);

function vittoria(risultato) {
    //verifica se il risulstato coincide con la scelta fatta dall'utente
    if ( risultato === scelta ) {
        //stampa che l'utante ha vinto
        alert('hai vinto');
    //altrimenti
    }else{
    //stampa che il computer ha vinto
        alert('vince il computer');
    }
}
vittoria(risultato);



