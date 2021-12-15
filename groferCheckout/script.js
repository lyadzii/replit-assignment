const body=document.querySelector("body");
let button = document.createElement("button");
button.id="btn-1";
button.innerText="Calculate total price";
body.appendChild(button);

button.addEventListener("click",calSum);

function calSum(event){
    const prices=document.querySelectorAll(".price");
    let sum=0;
    prices.forEach(ele=>{
      const price=parseInt(ele.innerText);
      sum+=price;
    });

   const tr=document.createElement("tr");
   const td=document.createElement("td");
   td.classList.add("item");
   td.innerText=`The total price is ${sum}.`;
   tr.appendChild(td);
   document.querySelector("table").appendChild(tr);
   event.target.disabled="true";
}

