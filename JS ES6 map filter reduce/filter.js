// Filter function 
// Creates a new array by keeping the items that return true 
// Ex - if item is true its added to new array 

const num =[100, 5, 4, 8, 22, 34, 70,3, 11, 55, 33]

const newArray = num.filter(function(num){
    return num < 30;
})

// Arrow Function 

const output = num.filter((num) => num >40)

console.log(output)