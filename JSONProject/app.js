async function postByUser(userId){
   const data = await fetch('https://jsonplaceholder.typicode.com/posts')

   const res = await data.json()
   const  post = res.filter(e => e.userId === userId)
   console.log(post)

}


postByUser(5)

//First 6 incomplete Todos

async function firstSixIncomplete(n){
   const data = await fetch('https://jsonplaceholder.typicode.com/todos')
   const res = await data.json()
   const todosfalse =  res.filter(e => e.completed == false).slice(0,n)
   const todostrue =  res.filter(e => e.completed == true).slice(0,n)

   console.log(todosfalse)
   console.log(todostrue)
}

firstSixIncomplete(8)