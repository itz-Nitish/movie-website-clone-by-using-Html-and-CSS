// const JSuser = {
//     name:"Nitish Mishra",
//     gender:"Male",
//     Age:20,
// } 
// console.log(JSuser)
// How we access the Objects?
// console.log(JSuser.name)
// console.log(JSuser["gender"])
// console.log(JSuser["Age"])

//create a object
// user1={
//     firstname:"MS",
//     lastname:"Dhoni",
//     profession:"Crickter",
//     category:"WC and Batsman",
//     // objects inside object
//     address:{
//     city:"Ranchi",
//     location:"ring rose road",
//     }
// }
// //Access the object
// console.log(user1)
// console.log(user1.firstname)
// console.log(user1.lastname)
// console.log(user1["profession"])
// console.log(user1["subject"])
// console.log(user1["address"])

// object freeze and seal
 let student={
    Name:"Nitish",
    class: "BCA",
    Age:19,
    
 }
 //Object.seal(student)
 Object.freeze(student)
 student.Name = "harsh"
 student.city ="ludhiana"
 student.idol="Dhoni"
console.log(student)