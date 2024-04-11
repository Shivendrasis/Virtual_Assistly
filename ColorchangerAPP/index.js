const buttons = document.getElementById("btn")
console.log(buttons)


//hex color picker
const randomcolor = () => {
    let val = "0123456789ABCDEF"   
    let cons = "#";

    for (let i = 0; i < 6; i++) {

        //Math.random function
        cons = cons + val[Math.floor(Math.random() * 16)];  
    }
    console.log(cons);

    //display the console in web page
    let output = document.getElementById("box");
    output.textContent = cons;
    console.log(output)
    //append child
    document.body.appendChild(output)

    return cons;

};



//call the random color by this function
function changerandomcolor() {
    document.body.style.backgroundColor = randomcolor();

}

//add click event on the button
buttons.addEventListener("click", changerandomcolor)
















