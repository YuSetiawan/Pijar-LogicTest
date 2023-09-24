/* 
Buatlah sebuah fungsi yang menghasilkan transpose dari sebuah matriks 2D.
contoh input: [ [1, 2, 3], [4, 5, 6], ];
Hasil yang diharapkan: [ [1, 4], [2, 5], [3, 6]];
*/

// Answer below

function transposeMatrix(matrix) {
  const row = matrix.length;
  const coloumn = matrix[0].length;

  const result = new Array(coloumn).fill(null).map(() => new Array(row).fill(null));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < coloumn; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

const matrixInput = [
  [1, 2, 3],
  [4, 5, 6],
];

const matrixResult = transposeMatrix(matrixInput);
console.log(matrixResult);
