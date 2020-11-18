let a = document.getElementsByClassName("answer")[0];
let y = document.getElementById("yes");
let n = document.getElementById("no");
n.addEventListener("mouseover", () => {
  if (a.style.flexDirection == "row") {
    a.style.flexDirection = "row-reverse";
  } else {
    a.style.flexDirection = "row";
  }
});
y.addEventListener("click", () => {
  alert("Yeahhh!");
});