 // Import stylesheets
import './style.css';

// Writge Javascript code!
var dino=document.getElementById("dino");
function jumpdino()
{
  dino.classList.add("jump");  
}
addEventListener("keydown",jumpdino)