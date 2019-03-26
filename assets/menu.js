function openNav() {
  document.getElementById('myNav').style.height = "100%";
}

function closeNav() {
  document.getElementById('myNav').style.height = "0%";
}

function hideMenu() {
  document.getElementById('menuIcon').style.opacity = "0";
  document.getElementById('menuIcon').style.transitionDuration = "0.3s";
}

function showMenu() {
  document.getElementById('menuIcon').style.opacity = "100";
  document.getElementById('menuIcon').style.transitionDuration = "0.3s";
}