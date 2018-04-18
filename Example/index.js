function bulbBut() {
  console.log("text");
  let text = document.createElement("h1");
  text.classList.add("bulbSucks");
  text.innerHTML = "Bulbasaur is not a real starter Pokemon";
  document.getElementsByClassName("bulbasaur")[0].appendChild(text);
}
