function openMenu(){
  const nav = document.getElementById("nav");
  const menuClose = document.getElementById("menu-close");
  nav.style.display = "flex";
  menuClose.style.display = "block";
}

function closeMenu(){
    const nav = document.getElementById("nav");
    const menuClose = document.getElementById("menu-close");
    nav.style.display = "none";
    menuClose.style.display = "none";
}