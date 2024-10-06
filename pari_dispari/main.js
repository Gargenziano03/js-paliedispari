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
let sum;
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


