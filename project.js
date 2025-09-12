let boxes=document.querySelectorAll('.boxes'); 
let body=document.querySelector('body');  
boxes.forEach((box)=>{
box.addEventListener('click', (e)=>{
   if( e.target.id==="yellow"){
    body.style.backgroundColor="yellow"; 
  if(e.target.id==="yellow"){
      body.style.color="black";
  } 
    
   }
   else if(e.target.id==="white"){
     body.style.backgroundColor="white"; 
     if(e.target.id==="white"){
      body.style.color="black"; 
     }
   }
   else if(e.target.id==="bangan"){
    body.style.backgroundColor="rgb(0,0,33)"; 
    if(e.target.id==="bangan"){
      body.style.color="white"; 
    }
   }

   
})
}); 