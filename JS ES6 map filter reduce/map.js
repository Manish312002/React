// MAP function 
// map creates new array by doing something with each element in array 

const num =[5, 4, 8, 22]

function double(num){
    return num * 2
}

// Arrow Function 

const output1 = num.map((num) =>  num*2 )

const output = num.map(double)

console.log(output1)