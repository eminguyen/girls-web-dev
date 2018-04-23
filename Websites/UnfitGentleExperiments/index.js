function buttonAction() {
  console.log("working");
  var text = document.createElement("h1");
  text.classList.add("buttonCreatedHeading");
  text.innerHTML = "Take quizzes on pottermore!";
  document.getElementsByClassName("introduction")[0].appendChild(text);
}
