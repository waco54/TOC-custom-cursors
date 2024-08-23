function updateColor() {
  let colorValue = document.querySelector("#color").value;
  let colorDiv = document.querySelector("body > div > div.color");
  colorDiv.style.backgroundColor = colorValue;
}

function updateSize() {
  let sizeValue = document.querySelector("#size").value;
  let sizeDiv = document.querySelector("body > div > div.size");
  sizeDiv.style.width = sizeValue;
  sizeDiv.style.height = sizeValue;
}
