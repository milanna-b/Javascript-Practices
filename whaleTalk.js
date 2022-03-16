let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

// makes sure each length matches to get result
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
// turns e to ee
    if (input[i] === 'e') {
      resultArray.push('ee');
// turns u to uu
    } else if (input[i] === 'u') {
      resultArray.push('uu');
// logs result as normal if no e or u
    } else {
      resultArray.push(input[i]);
    }
    }
  }
}

// .join eliminates the commas
console.log(resultArray.join('').toUpperCase());