function displayRandomImg(){
  const im=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
  var i=Math.floor(Math.random()*6);
  var j=Math.floor(Math.random()*6);
  if (i===0)
  {
    document.querySelector(".img1").setAttribute("src",im[0]);
  }
  else if (i===1) {
    document.querySelector(".img1").setAttribute("src",im[1]);
  }
  else if (i===2) {
    document.querySelector(".img1").setAttribute("src",im[2]);
  }
  else if (i===3) {
    document.querySelector(".img1").setAttribute("src",im[3]);
  }
  else if (i===4) {
    document.querySelector(".img1").setAttribute("src",im[4]);
  }
  else if (i===5) {
    document.querySelector(".img1").setAttribute("src",im[5]);
  }
  if (j===0)
  {
    document.querySelector(".img2").setAttribute("src",im[0]);
  }
  else if (j===1) {
    document.querySelector(".img2").setAttribute("src",im[1]);
  }
  else if (j===2) {
    document.querySelector(".img2").setAttribute("src",im[2]);
  }
  else if (j===3) {
    document.querySelector(".img2").setAttribute("src",im[3]);
  }
  else if (j===4) {
    document.querySelector(".img2").setAttribute("src",im[4]);
  }
  else if (j===5) {
    document.querySelector(".img2").setAttribute("src",im[5]);
  }
  if (i===j)
  {
    document.querySelector("h1").innerHTML="Draw";
  }
  else if (i>j)
  {
    document.querySelector("h1").innerHTML="Player 1 wins";
  }
  else if (i<j)
  {
    document.querySelector("h1").innerHTML="Player 2 wins";
  }
}
