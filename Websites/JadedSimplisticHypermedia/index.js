function buttonAction() {
  console.log("Test");
  var text = document.createElement("h1");
  text.classList.add("butonCreatedHeading");
  text.innerHTML = "DOGE";
  document.getElementsByClassName("introduction")[0].appendChild(text);
}
