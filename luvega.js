function calculateProduct(numbersArray) {
    let product = 1;
  
    for (let i = 0; i < numbersArray.length; i++) {
      product *= numbersArray[i];
    }
  
    return product;
  }

  const numbers=[4,5,6,10];
  const product=calculateProduct(numbers);
  console.log(product)