let count=0; 
function updationcolor(){
    if(count>0){
        countValue.style.color="blue"; 
        countText.style.color="blue"; 
    }else if(count<0){
        countValue.style.color="red";
         countText.style.color="red";  
    }else{
        countValue.style.color="white"; 
         countText.style.color="white"; 
    }
}
let countText=document.querySelector("h1"); 
let countValue=document.querySelector("#count"); 
let increaseValue=document.querySelector(".increase"); 
let decreaseValue=document.querySelector(".decrease"); 
let resetbtn=document.querySelector(".reset"); 



increaseValue.addEventListener("click", ()=>{
    count++; 
    countValue.textContent=count; 
    updationcolor(); 
}); 

decreaseValue.addEventListener("click", ()=>{
    count--; 
    countValue.textContent=count; 
    updationcolor(); 
}); 

resetbtn.addEventListener("click", ()=>{
    count=0; 
countValue.textContent=count; 
updationcolor(); 
    }); 