const sumOfnumbersFromOneToTen = () => {
    let totalSum = 0;
      let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i
    }  
      return totalSum+sum
  }

let currentTotal = 0
let mainTotal = 0

for (let i = 1; i <= 10; i++) {
  let resOfSum = sumOfnumbersFromOneToTen();
  currentTotal += resOfSum;
    mainTotal += currentTotal
}

console.log(mainTotal)