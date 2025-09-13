document.getElementById('btn').addEventListener('click', () => {
  let color = window.getComputedStyle(document.getElementsByTagName('h1')[0]).color;
  document.getElementsByTagName('body')[0].style.backgroundColor = color;
});