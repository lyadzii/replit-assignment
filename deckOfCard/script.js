let count=0;
let reset=document.querySelector("#reset");
let won=document.querySelector(".won");
let shuffleArray=[];
let shuffleButton=document.querySelector("#shuffle");
let whitebox=document.querySelectorAll(".whitebox");
let allContainer=document.querySelector(".allCardContainer");

document.addEventListener("DOMContentLoaded",displayOnReload);
shuffleButton.addEventListener("click",shuffleCards);


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.parentNode.id);
}

function drop(ev) {
  ev.preventDefault();
  const source_id = ev.dataTransfer.getData("text");
  const dest_id=ev.target.id;

  if(source_id%4 == dest_id%4){
      let tohide=localStorage.getItem("tohide");
      tohide=JSON.parse(tohide);
      tohide.push(source_id);
      localStorage.setItem("tohide",JSON.stringify(tohide));

      const element= document.getElementById(source_id);
      element.parentNode.classList.add("hide");
      count++;
      if(count==52){
        won.style.display="flex";
        won.style.justifyContent="space-around";
      }
  }
}

reset.addEventListener("click",function(event){
  count=0;
  shuffleCards();
  won.style.display="none";
  const whiteboxs=document.querySelectorAll(".whitebox");
  whiteboxs.forEach(function(box){
    box.classList.remove("hide");
  })

  localStorage.removeItem("tohide");
  let arr=[];
  localStorage.setItem("tohide",JSON.stringify(arr));
})

function displayOnReload(event){
  let tohide=localStorage.getItem("tohide");
  let arr=localStorage.getItem("arr");
  if(arr==null){
    for(let i=0;i<52;i++)
      shuffleArray.push(i);
    shuffle(shuffleArray);
    localStorage.setItem("arr",JSON.stringify(shuffleArray));
  }
  else{
    shuffleArray=JSON.parse(arr);
  }

  allContainer.innerHTML="";
  shuffleArray.forEach(function(i){
  allContainer.appendChild(whitebox[i]);
  })

  if(tohide==null){
    let arr=[];
    localStorage.setItem("tohide",JSON.stringify(arr));
  }
  else{
    tohide=JSON.parse(tohide);
    tohide.forEach(function(id){
      document.getElementById(id).parentNode.classList.add("hide");
    })
    count=tohide.length;
    if(count==52){
      won.style.display="flex";
      won.style.justifyContent="space-around";
    }
  }
}

function shuffleCards(){
  shuffle(shuffleArray);
  allContainer.innerHTML="";
  shuffleArray.forEach(function(i){
  allContainer.appendChild(whitebox[i]);
  });
  localStorage.setItem("arr",JSON.stringify(shuffleArray));

}

function shuffle(shuffleArray){
  for(let i=0;i<shuffleArray.length;i++){
    let random=Math.floor(Math.random()*52);
    swap(shuffleArray,i,random);
  }
}

function swap(shuffleArray,i,random){
  let temp=shuffleArray[i];
  shuffleArray[i]=shuffleArray[random];
  shuffleArray[random]=temp;
}