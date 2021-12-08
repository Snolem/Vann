function changeTurbineState(e){
    const target = Array.from(turbiner).indexOf(e.target);
    const target_src = turbiner[target].src;
    if (target_src.indexOf("turbin_av") > -1){
        changeTurbineUsage(target, 1);
    } else {
        changeTurbineUsage(target, 0);
    }
}

const turbiner = document.querySelectorAll("#turbinpannel > div > img");
for (let i = 0; i < turbiner.length; i++){
    turbiner[i].addEventListener("click", changeTurbineState);
}

let rotation = 0;
let turbineState = new Array(20).fill({'capacityUsage': 0}); // so i dont get undefined, when not having the values

setInterval(() => {
    turbines().then(value => {
        turbineState = value.slice();
        for (let i = 0; i < turbiner.length; i++){
            if (turbineState[i].capacityUsage){
                turbiner[i].src = "media/turbin_på.png";
            } else {
                turbiner[i].src = "media/turbin_av.png";
            }
        }
    });
}, 1000);

setInterval(() => {
    for (let i = 0; i < turbiner.length; i++){
        if (turbineState[i].capacityUsage){
            turbiner[i].style.transform = "rotate(" + (rotation + 1) + "deg)";
        }
    }
    rotation++;
}, 10);


// under denne kommentaren er in og ut av skjermen animasjon over er panelet
let turbinPanelOpen = false;

const turbin_tab_BUTTON = document.getElementById("turbin_tab");
turbin_tab_BUTTON.addEventListener("click", inOutTurbineTab);
const turbin_tab_DIV = document.getElementById("turbinpannel");

let inoutcounter_turbinpanel = 1;
function inOutTurbineTab() {
    inoutcounter_turbinpanel++;
    if (inoutcounter_turbinpanel % 2 == 0){
        if (sidebarOpen == true){
            inOutSidebar();
        }
        turbinPanelOpen = true;
        turbin_tab_DIV.style.left = "calc((100% - 1185px) / 2)";
        turbin_tab_BUTTON.style.left = "calc(((100% - 1185px) / 2) - 30px)";
        turbin_tab_BUTTON.childNodes[0].src = "media/arrow_right.png";
    } else {
        turbinPanelOpen = false;
        turbin_tab_DIV.style.left = "100%";
        turbin_tab_BUTTON.style.left = "calc(100% - 30px)";
        turbin_tab_BUTTON.childNodes[0].src= "media/arrow_left.png";
    }
}