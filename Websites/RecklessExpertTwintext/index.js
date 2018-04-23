function buttonAction() {
  console.log("working");
  var text = document.createElement("h1");
  text.classList.add("buttonCreatedHeading");
  text.innerHTML = "HI";
  document.getElementsByClassName("hi")[0].appendChild(text);
}
