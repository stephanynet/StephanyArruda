// 01 - complexidade é O(n)

const findFirstRecurringCharacter = (input) => {
    const charHashMap = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  };

  
// 02 - complexidade é O(n)

export const func = (
    source,
    comparison
  ) => {
    if (
      comparison.length > source.length + 1 ||
      comparison.length < source.length - 1
    ) {
      return false;
    }
    let commonCharQuantity = 0;
  
    for (const char of comparison) {
      if (source !== comparison) {
        commonCharQuantity++;
      }
    }
    return (
      commonCharQuantity <= source.length + 1 &&
      commonCharQuantity >= source.length - 1
    );
  };


  // 03 - complexidade é O(1)

  export const replaceMatrixValue = (
    matrix,
    rowIndex,
    columnIndex,
    value
  ) => {
    if (
      matrix[rowIndex] === undefined ||
      matrix[rowIndex][columnIndex] === undefined
    ) {
      throw new Error("Fora do intervalo da matriz");
    }
  
    matrix[rowIndex][columnIndex] = value;
  };


   // 04 - complexidade é O(n²)

  function verifyIfExistRepeatedNumbers(listOfNumbers) {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
        return true;
      }
    }
    return false;
  }