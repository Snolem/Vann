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
            turbiner[i].style.transform = "rotate(" + (rotation + 1) + "deg)";
        }
    }
    rotation++;
}, 10);

turbines().then(value => {
    for (i = 0; i < value.length; i++){
        console.log("turbin " + (i+1) + " capacityUsage: " + value[i].capacityUsage);
    }
});