// Find function 
// find the first item that matches from the array 


const num =[100, 5, 4, 8, 22, 34, 70,3, 11, 55, 33]

const output = num.find(function(num){
    return (num<70 && num > 30)
})

// Arrow Function 

const output1 = num.find((num) => (num>30 && num < 70))

console.log(output1)