function update(){
    // acces to html elements 
    let date=document.querySelector("#date"); 
    let hour=document.querySelector("#hours"); 
    let minute=document.querySelector("#min"); 
    let sec=document.querySelector("#sec"); 
    let amp=document.querySelector("#ampm"); 


//access to system type, date using date class
const now =new Date(); 
let h=now.getHours(); 
let m=now.getMinutes(); 
let s=now.getSeconds(); 

date.innerHTML=now.toDateString(); 
amp.innerHTML=(h>=12 ? "PM":"Am"); 

//matlab 13 14 pe nahi jayega 
if(h>12){
h=h-12; 
}

//two two values hoge 
h=(h<10) ? "0"+h:h; 
m=(m<10) ? "0"+m:m; 
s=(s<10) ? "0"+s:s; 

//now set the date and time to html elemens
hour.innerHTML=h; 
minute.innerHTML=m; 
sec.innerHTML=s; 

}; 
setInterval(update,1000); 
update(); 