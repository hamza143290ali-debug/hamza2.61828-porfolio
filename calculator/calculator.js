let display = document.querySelector("#input"); 
let buttons = document.querySelectorAll(".boxes"); 

let string = ""; 

let btns = Array.from(buttons); 

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let btnText = e.target.innerHTML;

        if (btnText == 'AC') {
            string = ""; 
            display.value = string; 
        } 
        else if (btnText == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string; 
        } 
        else if (btnText == '=') {
            try {
                string = eval(string);   // evaluate the expression
                display.value = string; 
            } catch {
                display.value = "Error"; 
            }
        } 
        else {
            // Replace × with * and ÷ with /
            if (btnText == '×') btnText = '*';
            if (btnText == '÷') btnText = '/';

            string += btnText; 
            display.value = string; 
        }
    });
});
