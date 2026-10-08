// const orange=document.getElementById('orange')
// const white=document.getElementById("white")
// const green=document.getElementById("green")
// const skyblue=document.getElementById("skyblue")
// const yellow=document.getElementById("yellow")
// const body=document.body
//  orange.addEventListener('click',()=>{
//  body.style.backgroundColor = 'orange'
// })
// white.addEventListener("click",()=>{
//     body.style.backgroundColor="white"
// })
// green.addEventListener("click",()=>{
//     body.style.backgroundColor="green"
// })
// skyblue.addEventListener("click",()=>{
//     body.style.backgroundColor="skyblue"
// })
// yellow.addEventListener("click",()=>{
//     body.style.backgroundColor="yellow"
// })

//best method from above

// const buttons=document.querySelectorAll('button')
// const body=document.body
// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         body.style.backgroundColor= button.id
//     })

// })
// best method to optimized the code
const color=document.getElementById('color')
color.addEventListener('click',(event)=>{
    if(event.target.tagName==='BUTTON')
document.body.style.backgroundColor=event.target.id
})