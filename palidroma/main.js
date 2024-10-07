/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


/*PRE-FASE: STRUMENTI 
--let / const
-- .prompt
-- function
-- if / else 
*/

//FASE 1: PREPARAZIONE 
let parolaUtente
let parolaMinuscola

//FASE 2: RACCOLTA DATI 

//FASE 3: ELABORAZIONE DATI
 function verifica(word) {
    // rende la parola minuscola
    parolaMinuscola = word.toLowerCase();
    // controlla se la parola al inverso
    return parolaMinuscola === parolaMinuscola.split('').reverse().join('');
 }

//chiediamo al utente di inserire una parola
parolaUtente = prompt('inserisci una parola')
//condizione
if(verifica(parolaUtente)){
    //visualizzazione risultato
    alert('la parola inserita è palindroma')
    console.log('la parola inserita è palindroma');
}else{ 
    //visualizzazione risultato
    alert('la parola inserita non è palindroma')
    console.log('la parola inserita non è palindroma');
}

