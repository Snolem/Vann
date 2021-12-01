let sidebar = document.getElementById("sidebar");
let burgerDivs = document.querySelectorAll("#menuButton > div");

let sidebarButton = document.getElementById("menuButton");
sidebarButton.addEventListener("click", inOutSidebar);

let inoutcounter = 1;
function inOutSidebar() {
    inoutcounter++;
    if (inoutcounter % 2 == 0){
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