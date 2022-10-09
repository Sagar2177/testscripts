function starRating(r){
  let rating = ''
  for(let i = 0; i < r ; i++){
    rating = rating + '*';
    if(i != r.length){
      rating += ' '
    }
    }
    if(!Number.isInteger(r)){
      rating = rating + ' .'
  }
return rating
}

console.log(starRating(5.5))

//Sort the fcking Numbers

function sortNum(arr){
 return arr.sort((a,b) => a -b)
}

console.log(sortNum([1,3,4357,672,12,3]))