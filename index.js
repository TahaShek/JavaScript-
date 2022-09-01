console.log('hello')



// let myfun2=()=>{
//     console.log('my func 2 is gere ')
//     console.log('name is this')
// }


// let myfunc=(callback)=>{
// console.log('we here')
//     callback()



// }

// myfunc(myfun2)


// Map method 

// let number =[1,2,3,4,6];

// let  result= number.map(element,index)=>{
//     element
// }
// console.log(result)


// let user =[
//     {Name:'taha' ,age:21},
//     {Name:'ali' ,age:23},
//     {Name:'malik' ,age:34},
//     {Name:'zain' ,age:443},
// ]
//    let username = user.map((user)=>{
//     return user.Name
//  })

//  console.log(username)

// let number=[1,2,3,4,5,6,7,8,9,7,8,,15,6];

// let even=number.filter((element)=>{
// //   return  element%2===0;
// })

// console.log(even)

// console.log(even)()


// let filter=(number,greater)=>{
// return number.filter(element=>element>greater)
// }

// console.log(filter([1,2,3,4,5,6,7],6))

// let number=[1,2,3,4,5,6]

// let num=number.filter(num=> num>4)
// console.log(num)



// let result=actors.filter(actor=>actor.worth>50)
//  let n=result.map(actor=>actor.Name).join(',')
// console.log(n)



// let sum=(number)=>{
// let result=0;
// for( let num of number){
//     console.log(num)
//     result+=num
// }
// return result;
// }

// console.log(sum([1,2,3,4,]))

// let sumNums=(number)=>{}
// let nums=[1,2,3,4,5];
// let result= nums.reduce((add1,add2)=>add1+add2)  

// console.log(result)

// let sum=(a,b)=>{
//     return a*b
// }
// let num=[1,2,3,4]
// let result=num.reduce(a)=>a
// console.log(result)

//  let  actors=[
//           {Name:'jonny',worth:1000},
//          {Name:'jerry',worth:10},
//         {Name:'kik',worth:200000},
//     ]
//     let worth=actors.reduce((a,b)=>a+b.worth,0)
//     console.log(worth)

let title =document.querySelector('.title');
let red=document.querySelector('.red');
let yellow=document.querySelector('.yellow');
let green=document.querySelector('.green');

// red.onclick= () => console.log('you clicked red ')
// yellow.onclick= () => console.log('you clicked yello ')
// green.onclick= () => console.log('you clicked green ')


let square=document.querySelectorAll('.colorSquare')
let timeClicked={'red':0,'green':0, 'yellow':0}

square.forEach(square=>{
  square.onclick= ()=> {
  timeClicked[square.value]+=1;
  square.innerText=timeClicked[square.value]
//   console.log(square.value)
}  
})


