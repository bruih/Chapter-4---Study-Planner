function openNav() {
  document.querySelector(".sidenav").style.width = "250px"; //calls the class sidenav under the function from the html "onclick" to do the width scaling when clicked. CSS will do the animations.
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
}