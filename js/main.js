function replaceClass(c1,c2){
    let elements = document.querySelectorAll("."+c1);

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.replace(c1,c2);
    }
}

var colorSwitch = true;


console.log(localStorage.colorSwitch);



window.onload = function(){
    if(localStorage.colorSwitch=="false"){
        console.log("test");
        replaceClass("draculaPink","oblivionRed");
        replaceClass("draculaPurple","oblivionBlue");
        replaceClass("draculaBlue","oblivionCyan");
        replaceClass("bg","bg2");
        colorSwitch=false;
        localStorage.setItem("colorSwitch", "false");
    }  
    document.getElementById("button").onclick = function(){
        if(colorSwitch){
            replaceClass("draculaPink","oblivionRed");
            replaceClass("draculaPurple","oblivionBlue");
            replaceClass("draculaBlue","oblivionCyan");
            replaceClass("bg","bg2");
            colorSwitch=false;
            localStorage.setItem("colorSwitch", "false");
            console.log(localStorage.colorSwitch);
        }
        else{
            replaceClass("oblivionRed","draculaPink");
            replaceClass("oblivionBlue","draculaPurple");
            replaceClass("oblivionCyan","draculaBlue");
            replaceClass("bg2","bg");
            colorSwitch=true;
            localStorage.setItem("colorSwitch", "true");
        }
        

    };
    
}
