/* 
Buatlah sebuah fungsi yang menerima array bilangan bulat dan 
mengembalikan array yang berisi bilangan prima dari array tersebut.
contoh input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Hasil yang diharapkan: [2, 3, 5, 7];
*/

// Answer below

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeNumberSelection(arr) {
  const primeNumber = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPrimeNumber(arr[i])) {
      primeNumber.push(arr[i]);
    }
  }

  return primeNumber;
}

const numberInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumber = primeNumberSelection(numberInput);
console.log(primeNumber);
