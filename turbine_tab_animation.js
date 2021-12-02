function turbines(){
    return fetch("https://innafjord.azurewebsites.net/api/Turbines", {
        headers: {
            "GroupId": "Pavens vannkraftarbeidere",
            "GroupKey": "/kJ+p7iy1kShleUuDqPNEA=="
        }
    }).then(r =>r.json());
}

let turbineList = [];
turbines().then(value => {
    for (i = 0; i < value.length; i++){
        turbineList.push(value[i].id)
    }
});

function changeTurbineUsage(turbineIndex, usage){
    fetch("https://innafjord.azurewebsites.net/api/Turbines/" + turbineList[turbineIndex] + "?capacityUsage=" + usage, {
        method: "PUT",
        headers: {
            "GroupId": "Pavens vannkraftarbeidere",
            "GroupKey": "/kJ+p7iy1kShleUuDqPNEA=="
        }
    });
}

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
