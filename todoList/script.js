//your code here!

let input= document.querySelector("#newTodoInput");
let button= document.querySelector("#addTodoBtn");
let todoList= document.querySelector("#todoList");

button.addEventListener("click",addItem);

function addItem(){
  if(input.value!=""){
    let li=document.createElement("li");
    li.innerText=input.value;
    todoList.append(li);
    input.value="";
  }
}