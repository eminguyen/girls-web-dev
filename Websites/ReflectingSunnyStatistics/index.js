function buttonAction() {
console.log("Test");
var text= document.createElement("h1");
text.classList.add("buttonCreatedHeading");
text.innerHTML="no u";
document.getElementsByClassName("cats")[0].appendChild(text);
}
