const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");

textInput.addEventListener("input", () => {

    if(textInput.value.trim() === ""){
        preview.innerHTML = "Your text will appear here...";
    }else{
        preview.innerHTML = textInput.value;
    }

});

/* STYLE FUNCTIONS */

function changeStyle(style){

    if(style === "bold"){
        preview.style.fontWeight =
        preview.style.fontWeight === "bold"
        ? "normal"
        : "bold";
    }

    if(style === "italic"){
        preview.style.fontStyle =
        preview.style.fontStyle === "italic"
        ? "normal"
        : "italic";
    }

    if(style === "uppercase"){
        preview.style.textTransform =
        preview.style.textTransform === "uppercase"
        ? "none"
        : "uppercase";
    }

}

/* CLEAR TEXT */

function clearText(){

    textInput.value = "";
    preview.innerHTML = "Your text will appear here...";

}