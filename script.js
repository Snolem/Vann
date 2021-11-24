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
// ".then" venter på å motta en verdi før den fortsetter
// der hvor jeg srkiver "value => {}" er en kortere version av "function(value) {}"
// ordet value kan endres

//denne er bare ett tall og kan printes direkte
powerPrice().then(value => {
    console.log("powerPrice: " + value);
});

//denne er bare ett tall og kan printes direkte
waterInflux().then(value => {
    console.log("waterInflux: " + value);
});

//denne er ett objekt hvor jeg henter environmentCost, money og waterLevel
groupState().then(value => {
    console.log("environmentCost: " + value.environmentCost);
    console.log("money: " + value.money);
    console.log("waterLevel: " + value.waterLevel);
});

// denne er en liste med objekter
// Så her velges først ett objekt fra listen, og så henter jeg capacityUsage
turbines().then(value => {
    for (i = 0; i < value.length; i++){
        console.log("turbin " + (i+1) + " capacityUsage: " + value[i].capacityUsage);
    }
});
