let Red = document.querySelector(".btn_red");
let Yellow = document.querySelector(".btn_yellow");
let Green = document.querySelector(".btn_green");
let Reset = document.querySelector(".btn_reset");
let body = document.querySelector("body");

Red.addEventListener("click", () => {
  setTimeout(() => {
    console.log("red");
    body.style.backgroundColor = "red";
  }, 1500);
});

Yellow.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Paint it yellow");
    body.style.backgroundColor = "yellow";
  }, 1500);
});

Green.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Paint it green");
    body.style.backgroundColor = "green";
  }, 1500);
});

Reset.addEventListener("click", () => {
  console.log("reset");
  setTimeout(() => {
    body.style.backgroundColor = "white";
  }, 1000);
});
