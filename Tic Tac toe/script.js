let boxes = document.querySelectorAll(".box"); 
let reset = document.querySelector(".reset-btn"); 
let h1btn=document.querySelector("#h1"); 
let body=document.querySelector("body"); 
let TurnO = true; 

let winpattern = [
    [0,1,2],
    [0,3,6], 
    [0,4,8], 
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
]; 

boxes.forEach((cbox)=>{
    cbox.addEventListener("click",()=>{
        if(TurnO){
            cbox.innerText="O"; 
            TurnO=false; 
        }else{
            cbox.innerText="X"; 
            TurnO=true; 
        }
        cbox.disabled=true; 
        
        checkwinner(); 
    }); 
}); 

// button banaya
let congrate = document.createElement("button"); 
congrate.setAttribute( "class", "congratulation"); 

// by default hidden rakho
// congrate.style.display = "none";  

let newbtn = document.querySelector(".new-game"); 
newbtn.before(congrate); 

const checkwinner = ()=>{

    for(let i=0; i<winpattern.length; i++){
        let post1value = boxes[winpattern[i][0]].innerText; 
        let post2value = boxes[winpattern[i][1]].innerText; 
        let post3value = boxes[winpattern[i][2]].innerText; 

        if(post1value != "" && post2value != "" && post3value != "" ){
            if(post1value == post2value && post2value == post3value){
                console.log( `The winner is ${post1value}`); 

                // button ko show karo aur text change karo
                congrate.innerText = `🎉 Congratulations Winner: ${post1value}`;
                 congrate.style.display = "block";  

                
                             // Hide game elements
                boxes.forEach((b)=> b.style.display = "none"); 
                reset.style.display = "none"; 
                newbtn.style.display = "none";
                h1btn.style.display="none"; 
                


                return; 
            }
        }
       
    }
}

