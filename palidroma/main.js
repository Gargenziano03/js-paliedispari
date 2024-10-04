/*Palidroma
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
    parolaMinuscola = word.toLowerCase();
    return parolaUtente === parolaMinuscola.split('').reverse().join('');
 }


//FASE 4: OUTPUT