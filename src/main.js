const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector("#overlay");
const main = document.querySelector("main");

let storage = localStorage.getItem("sidebar");

if (storage === "open") {
  openSidebar();
}

if (storage === "close") {
  closeSidebar();
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth >= 1024){
        closeSidebar()
    }
})

function openSidebar() {
  localStorage.setItem("sidebar", "open");
  sidebar.classList.remove("hidden");
  overlay.classList.remove("hidden");
  main.inert = true;
}

function closeSidebar() {
  localStorage.setItem("sidebar", "close");
  sidebar.classList.add("hidden");
  overlay.classList.add("hidden");
  main.inert = false;
}