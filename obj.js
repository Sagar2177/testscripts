// Filter Apple

function removeApples(arr){
  // let noApples=[]
  // for (let i = 0; i < arr.length; i++){
  //   if(arr[i] != 'Apple'){
  //     noApples.push(arr[i])
  //   }
  // }
  // return noApples

  return arr.filter(e => e!=='Apple')
}

console.log(removeApples(['Apple', 'Babn', 'Apple', 'shhas']))