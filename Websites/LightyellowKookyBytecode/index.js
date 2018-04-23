function buttonAction() {
  var string = "Bears";
  console.log("Test");
  var text = document.createElement("li");
  text.classList.add("buttonCreatedHeading");
  text.innerHTML = "Bears. Beets. Battlestar Galactica.";
  document.getElementsByClassName("introduction")[0].appendChild(text);
}
