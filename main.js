const sidebar = document.querySelector("#sidebar");
const open_sidebar = document.querySelector("#open-sidebar")
const close_sidebar = document.querySelector("#close-sidebar")
const overlay = document.querySelector("#overlay");
const main = document.querySelector("main");

let storage = localStorage.getItem("sidebar");

if (storage === "open") {
  openSidebar();
}

if (storage === "close") {
  closeSidebar();
}

open_sidebar.addEventListener("click", openSidebar)
close_sidebar.addEventListener("click", closeSidebar)

window.addEventListener("resize", ()=>{
    if(window.innerWidth >= 1024){
        closeSidebar()
    }
})

function openSidebar() {
  localStorage.setItem("sidebar", "open");
  sidebar.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflowY = "hidden"
  main.inert = true;
}

function closeSidebar() {
  localStorage.setItem("sidebar", "close");
  sidebar.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflowY = "scroll"
  main.inert = false;
}