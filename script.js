function powerPrice(){
    return fetch("https://innafjord.azurewebsites.net/api/PowerPrice").then(r =>r.json());
}
function waterInflux(){
    return fetch("https://innafjord.azurewebsites.net/api/WaterInflux").then(r =>r.json());
}
function groupState(){
    return fetch("https://innafjord.azurewebsites.net/api/GroupState", {
        headers: {
            "GroupId": "Pavens vannkraftarbeidere",
            "GroupKey": "/kJ+p7iy1kShleUuDqPNEA=="
        }
    }).then(r =>r.json());
}
function turbines(){
    return fetch("https://innafjord.azurewebsites.net/api/Turbines", {
        headers: {
            "GroupId": "Pavens vannkraftarbeidere",
            "GroupKey": "/kJ+p7iy1kShleUuDqPNEA=="
        }
    }).then(r =>r.json());
}


// printer alt
powerPrice().then(value => {
    console.log("powerPrice: " + value);
});
waterInflux().then(value => {
    console.log("waterInflux: " + value);
});
groupState().then(value => {
    console.log("environmentCost: " + value.environmentCost);
    console.log("money: " + value.money);
    console.log("waterLevel: " + value.waterLevel);
});
turbines().then(value => {
    for (i = 0; i < value.length; i++){
        console.log(`turbin ${i+1} capacityUsage: ${value[i].capacityUsage}`);
    }
});