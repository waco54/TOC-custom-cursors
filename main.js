let saveCodeText = document.querySelector("#saveCode");
saveCodeText.style.display = "none";

document.querySelector("body > button").addEventListener("click", saveCode);

function saveCode() {
  let color = document.querySelector("#color").value;
  let shape = document.querySelector("#shape").value;
  let size = document.querySelector("#size").value;

  let saveCodeOutput = "_color_" + color + "_shape_" + shape + "_size_" + size;
  saveCodeText.innerText = saveCodeOutput;
  saveCodeText.style.display = "block";
}

function updateColor() {
  let colorValue = document.querySelector("#color").value;
  let colorDiv = document.querySelector("body > div > div.color");
  colorDiv.style.backgroundColor = colorValue;
}

function updateColor() {
  let sizeValue = document.querySelector("#size").value;
  let sizeDiv = document.querySelector("body > div > div.size");
  sizeDiv.style.width = sizeValue;
  sizeDiv.style.height = sizeValue;
}
