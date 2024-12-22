let checkbox = document.getElementById("mycheckbox");
let checkbox2 = document.getElementById("mycheckbox2");

let background=document.getElementById("bacgroundContainer");


checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        background.className="bgcontainer";
    }
    else{
        background.className = "";
    }
})
checkbox2.addEventListener("click", () => {
    if (checkbox2.checked) {
        background.className="bgcontainer";
    }
    else{
        background.className = "";
    }
})
console.log("kiruthi");
