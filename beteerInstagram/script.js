function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    const source_id = ev.dataTransfer.getData("text");
    let destination= ev.target;
    let source=document.getElementById(source_id);
    
    const s_content=source.innerText;
    const d_content=destination.innerText;
    const s_class1=source.classList[0];
    const d_class1=destination.classList[0];
  
    source.classList.replace(s_class1,d_class1);
    destination.classList.replace(d_class1,s_class1);
  
    source.innerText=d_content;
    destination.innerText=s_content;
  }