const number = document.getElementById("number2");
let counter = 0;

initApp();

function initApp(){
    setInterval(() => {
        if (counter === 65) {
            clearInterval();
            return;
        }
        counter++;
    number2.innerText = counter + "%";
    },  1500/20)      
    
}


