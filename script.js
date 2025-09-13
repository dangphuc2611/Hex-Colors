// way 1
document.getElementById("btn").addEventListener("click", () => {
  let color = window.getComputedStyle(
    document.getElementsByTagName("h1")[0]
  ).color;
  document.getElementsByTagName("body")[0].style.backgroundColor = color;
});

// way 2
document.getElementById("btn2").addEventListener("click", () => {
  let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexCodeString = "";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexCode.length);
    hexCodeString += hexCode[randomIndex];
  }
  document.getElementsByTagName("body")[0].style.backgroundColor = '#' + hexCodeString;
  console.log(hexCodeString);
});
