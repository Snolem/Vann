const sidebar = document.getElementById("sidebar");
const burgerDivs = document.querySelectorAll("#menuButton > div");
const sidebarContent = document.getElementById("sidebarContent");

const sidebarButton = document.getElementById("menuButton");
sidebarButton.addEventListener("click", inOutSidebar);
let sidebarOpen = false;

let inoutcounter_sidebar = 0;
function inOutSidebar() {
    inoutcounter_sidebar++;
    if (inoutcounter_sidebar % 2 == 0){
        sidebarOpen = false;
        sidebar.style.width = "50px";
        for (let i = 0; i < burgerDivs.length; i++){
            burgerDivs[i].style.width = "29px";
        }
        sidebarContent.style.animation = "fade_out 0.8s forwards";
        setTimeout(() => { if (sidebarOpen == false) {sidebarContent.style.display = "none" }}, 800);
    } else {
        if (turbinPanelOpen == true){
            inOutTurbineTab();
        }
        sidebarOpen = true;
        sidebar.style.width = "250px";
        for (let i = 0; i < burgerDivs.length; i++){
            burgerDivs[i].style.width = "200px";
        }
        sidebarContent.style.animation = "fade_in 0.8s forwards";
        sidebarContent.style.display = "block";
    }
}