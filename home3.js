function alert_name() {
  //Create name variable
  var name = "Shori";
  alert("My name is " + name + ". I do not exist.");
  //console.log("Test 123")
}

function more_pictures() {
  var img = document.getElementById('hackerman');
  if (img.src.match("img/hackerman.png")) {
    img.src = "img/lar.png";
  }
  else {
    img.src = "img/hackerman.png"
  }
}

function big_pic(x) {
  x.style.height = "800px";
  x.style.width = "800px";
}

function normal(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}
