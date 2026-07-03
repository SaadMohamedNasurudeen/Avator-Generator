const faceColors = ["#f0c27b", "#e0ac69", "#c68642", "#8d5524"];
const hairColors = ["#3b2b20", "#000000", "#a52a2a", "#f4d03f"];
const mouthColors = ["#a83232", "#c0392b", "#7d3c98"];

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateAvatar() {
  document.querySelector(".avatar-box").style.background = randomFromArray(faceColors);
  document.querySelector(".hair").style.background = randomFromArray(hairColors);
  document.querySelector(".mouth").style.background = randomFromArray(mouthColors);
}

document.getElementById("generateBtn").addEventListener("click", generateAvatar);