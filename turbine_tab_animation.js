function turbines(){
    return fetch("https://innafjord.azurewebsites.net/api/Turbines", {
        headers: {
            "GroupId": "Pavens vannkraftarbeidere",
            "GroupKey": "/kJ+p7iy1kShleUuDqPNEA=="
        }
    }).then(r =>r.json());
}

let rotation = 0;
let turbineState = new Array(20).fill({'capacityUsage': 0}); // so i dont get undefined, when not having the values

setInterval(() => {
    turbines().then(value => {
        turbineState = value.slice();
    });
}, 1000);

setInterval(() => {
    let turbiner = document.querySelectorAll("#turbinpannel > div > img");
    for (let i = 0; i < turbiner.length; i++){
        if (turbineState[i].capacityUsage){
            turbiner[i].src = "media/turbin_på.png";
            turbiner[i].style.transform = "rotate(" + (rotation + 1) + "deg)";
        } else {
            turbiner[i].src = "media/turbin_av.png";
        }
    }
    rotation++;
}, 10);
