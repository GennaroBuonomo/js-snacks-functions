/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countvowels(string){
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for(let i=0; i<string.length; i++) {
    if(vowels.includes(string[i])){
      count++;
    }
  }
  return count;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(countvowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)