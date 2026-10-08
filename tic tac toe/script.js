 let turn='O'

let winner=[
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
const board_array=new Array(9).fill("E")
["E","E","E","E","E","E","E","E"] 

           
 const board=document.querySelector("#board")
 board.addEventListener('click',(event)=>{
    const element=event.target
    if (turn==='O'){
        element.innerHTML='O' 
        border_array
        turn='X'
 }else{
    element.innerHTML='X'
    turn='O'
 }
 })
