
function add(){
const input1=document.getElementById("number1")
const first=Number(input1.value)
const input2=document.getElementById("number2")
const second=Number(input2.value)
//output
const result= first+second
const re=document.getElementById("Result")
re.textContent= "Result: "+result
}