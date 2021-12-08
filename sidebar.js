const sidebar = document.getElementById("sidebar");
const burgerDivs = document.querySelectorAll("#menuButton > div");
const sidebarContent = document.getElementById("sidebarContent");

const sidebarButton = document.getElementById("menuButton");
sidebarButton.addEventListener("click", inOutSidebar);

let inoutcounter_sidebar = 0;
function inOutSidebar() {
    inoutcounter_sidebar++;
    if (inoutcounter_sidebar % 2 == 0){
        sidebar.style.width = "50px";
        for (let i = 0; i < burgerDivs.length; i++){
            burgerDivs[i].style.width = "29px";
        }
        sidebarContent.style.opacity = "0%";
    } else {
        sidebar.style.width = "250px";
        for (let i = 0; i < burgerDivs.length; i++){
            burgerDivs[i].style.width = "200px";
        }
        sidebarContent.style.opacity = "100%";

    }
}