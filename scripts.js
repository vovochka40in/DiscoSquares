var sqr = document.getElementById("parent-square");

sqr.addEventListener("mouseover", function(event) {
  event.preventDefault();
  event.target.setAttribute('style', setRandomBgColor());
});

function setRandomBgColor() {
  return "background-color: rgb("+getRandomColor()+", "+getRandomColor()+", "+getRandomColor()+");";
}

function getRandomColor() {
  var min = 0, max = 255;
  return (Math.round((Math.random() * max))).toString();
}
