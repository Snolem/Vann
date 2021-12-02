let sidebar = document.getElementById("sidebar");
let burgerDivs = document.querySelectorAll("#menuButton > div");

let sidebarButton = document.getElementById("menuButton");
sidebarButton.addEventListener("click", inOutSidebar);

let inoutcounter_sidebar = 1;
function inOutSidebar() {
    inoutcounter_sidebar++;
    if (inoutcounter_sidebar % 2 == 0){
        sidebar.style.width = "50px";
        for (let i = 0; i < burgerDivs.length; i++){
            burgerDivs[i].style.width = "29px";
        }
    } else {
        sidebar.style.width = "250px";
        for (let i = 0; i < burgerDivs.length; i++){
            burgerDivs[i].style.width = "200px";
        }
    }
}