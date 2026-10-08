//reduce
// let arr =[10,20,30,40,50]
// const result=arr.reduce((acc,curr)=>acc+curr,0)
// console.log( result)

//find the biggest elem. in the array
// let arr=[12,45,7,89,23] 
// const result=arr.reduce((acc,curr)=>{
//     if(acc<curr){
//         return curr
//     } else{
//         return acc
//     }
// },0)
// console.log(result)

//product all the elements of the array
// let arr=[10,2,3,4]
// const result=arr.reduce((acc,curr)=>acc*curr,1)
// console.log(result)

//count the even elements in the array
// let arr=[34,45,67,87,90,35,23,17]
// const result=arr.reduce((acc,curr)=>{
//     if (curr%2===0){
//         return(acc+1)
//     }else{
//         return(acc)
//     }
// },0)
// console.log(result)

//sets UNION 
 const set1=new Set ([10,20,30,40,50])
 const set2=new Set([10,20,30,70,80])
 const set3=new Set([...set1,...set2])
 console.log(set3)



