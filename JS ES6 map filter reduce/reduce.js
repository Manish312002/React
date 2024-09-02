// Reduce function 
// Acuumulate a value by doing something to each item of array 


const num =[100, 5, 4, 8, 22, 34, 70,3, 11, 55, 33]

const newNum = num.reduce(function(acuumulator ,currentNumber){
    console.log("Acuumulator :"+acuumulator);
    console.log("CurrentNumber :"+currentNumber);
    return acuumulator + currentNumber
})
console.log(newNum)