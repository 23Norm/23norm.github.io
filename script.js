import Stack from './stack.js';

let stack = new Stack

let insertButton = document.getElementById('insert');
let removeButton = document.getElementById('remove');
let emptyButton = document.getElementById('empty');
let input = document.getElementById('input');

document.getElementById('refresh').addEventListener("click", () =>{
    window.location = "/"
})

function makeNofication(notification){

let message = document.getElementById("message")
message.innerHTML = notification;

setTimeout(() => {
    message.innerHTML = ""
}, 4000);
}

function addArray(){
    let array = document.createElement("div");
    array.className = 'array';

document.getElementById('middle').appendChild(array)

    for (let index = 0; index < stack.size; index++){

      let box = document.createElement("div");
      box.className = 'box';
      box.innerHTML = stack.getStack()[index] == undefined ? "" : stack.getStack()[index];
      array.appendChild(box)
    }

   array.children[stack.getCurrent].style.backgroundColor = "Black"

}

insertButton.addEventListener ("click",() =>{
    let insertValue = stack.insert(input.value)

    if(insertValue == "Stack Overflow"){
    makeNofication(insertValue)}
    else{
    addArray()}
    
})

removeButton.addEventListener ("click",() =>{

    let removeValue = stack.remove(input.value)

    if(removeValue == "Stack Underflow"){
    makeNofication(removeValue)}
    else{
    addArray()}

})

emptyButton.addEventListener ("click",() =>{
    makeNofication(stack.empty())})
