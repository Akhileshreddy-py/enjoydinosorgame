 // Import stylesheets
import './style.css';

// Writge Javascript code!
var dino=document.getElementById("dino");
function jumpdino()
{
  dino.classList.add("jump");  
  function removeclass()
  {
dino.classList.remove("jump");
  }  
  setTimeout(removeclass,500);
}
addEventListener("keydown",jumpdino)