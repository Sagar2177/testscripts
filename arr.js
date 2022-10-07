const arr = [10,20,30,40,50]

arr.push(200)

// console.log(arr)

let newArr =  arr.filter(e => e > 50)

console.log(newArr)

let grades = ['A','A +','B+','FAIL','FAIL']

let pass = grades.filter(e => e!== 'FAIL')

console.log(pass)

// MAP Method

let arr1 = [1,3,4,5,6,7,99,232]

 let arr2 = arr1.map( e => e + 100)
console.log(arr1, arr2)


let cents = [];

for(let i =0; i < arr1.length; i++){
   cents.push(arr1[i] + 100)
}
console.log (arr1,cents)
