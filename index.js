 // Import stylesheets
import './style.css';

// Writge Javascript code!
var dino=document.getElementById("dino");
function jumpdino(e)
{
  if(e.key=="ArrowUp")
  {
  dino.classList.add("jump");  
  function removeclass()
  {
dino.classList.remove("jump");
  }  
  console.log(e.key);
  setTimeout(removeclass,500);
}}
addEventListener("keydown",jumpdino)