function buttonAction(){
  console.log ("working");
  var text = document.createElement("li");
  text.classList.add("buttonCreatedHeading");
  text.innerHTML="I'm like ice cream!";
  document.getElementsByClassName("list1")[0].appendChild(text);
}
