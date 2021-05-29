const hamburger = document.getElementById(".line")
const navList = document.getElementById(".nav-list")
const links = document.getElementById(".nav-link")

hamburger.addEventListener("click", ()=>{
    navList.classList.toggle("open")
    alert("working")
    links.forEach(link => {
        link.classList.toggle("fade");
      });
})