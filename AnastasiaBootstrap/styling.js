function changeText() {
  document.getElementById("changer").innerText = "I love music!";
}

function changeTitle() {
  document.getElementById("heading1").innerText = "Music";
}
function changeBack() {
  document.getElementById("heading1").innerText = "Musica";
}

let toggleCheck = false;

function toggleDropdown(){
  if (toggleCheck == false){
    document.getElementById("dropdown1").innerHTML = "-To express the cultural standards of rythm, melody, and harmony";
    document.getElementById("dropdown2").innerHTML = "-To aid in a dancing experience";
    document.getElementById("dropdown3").innerHTML = "-To have shows or movies express emotion and feeling";
    document.getElementById("dropdown4").innerHTML = "-Something for people to listen for a feeling or emotion whenever they please";
    toggleCheck = true;
  }
  else if(toggleCheck == true){
    document.getElementById("dropdown1").innerHTML = "";
    document.getElementById("dropdown2").innerHTML = "";
    document.getElementById("dropdown3").innerHTML = "";
    document.getElementById("dropdown4").innerHTML = "";
    toggleCheck = false;
  }
}

/*<ul>
  <li class="card-text">
  -To express the cultural standards of rythm, melody, and harmony
  </li>
  <li class="card-text">-To aid in a dancing experience</li>
  <li class="card-text">-To have shows or movies express emotion and feeling</li>
  <li class="card-text">
  -Something for people to listen for a feeling or emotion whenever they please
</li>
</ul>"*/