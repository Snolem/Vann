let sidebar = document.getElementById("sidebar");
let sidebarButton = document.getElementById("menuButton");
let burgerDivs = document.querySelectorAll("#menuButton > div");
sidebarButton.addEventListener("click", inOutSidebar);

let inoutcounter = 1;
function inOutSidebar() {
    console.log("test");
    inoutcounter++;
    if (inoutcounter % 2 == 0){
        sidebar.style.width = "50px";
        for (let i = 0; i < burgerDivs.length; i++){
            burgerDivs[i].style.width = "28px";
        }
    } else {
        sidebar.style.width = "250px";
        for (let i = 0; i < burgerDivs.length; i++){
            burgerDivs[i].style.width = "200px";
        }
    }
}