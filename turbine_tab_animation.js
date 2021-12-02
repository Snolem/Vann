function turbines(){
    return fetch("https://innafjord.azurewebsites.net/api/Turbines", {
        headers: {
            "GroupId": "Pavens vannkraftarbeidere",
            "GroupKey": "/kJ+p7iy1kShleUuDqPNEA=="
        }
    }).then(r =>r.json());
}

const turbiner = document.querySelectorAll("#turbinpannel > div > img");
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
