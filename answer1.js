/* 
Buatlah sebuah fungsi rekursif yang menghitung faktorial dari sebuah angka.
contoh input: 5
Hasil yang diharapkan: 120
*/

// Answer below

function factorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

inputNum = 5;
console.log(factorial(inputNum));
