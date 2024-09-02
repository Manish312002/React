// findIndex function 
// find the index of the first item that matches 

const num =[100, 5, 4, 8, 22, 34, 70,3, 11, 55, 33]

const output = num.findIndex(function(num){
    return num == 70
})

// Arrow Function 

const output1 = num.findIndex((num) => num == 70)

console.log(output1)