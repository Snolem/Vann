let bubbles = document.getElementById("bubbleDiv");

for (let i = 0; i < 20; i++){
    makeBubble(true);
}

function makeBubble(randomRange) {
    let div = document.createElement("div");
    div.classList.add("bubble");
    if (randomRange){
        div.style.top = Math.random() * 100 + "vh";
    } else {
        div.style.top = "100vh";
    }
    div.style.left = Math.random() * 100 + "%"; //random x

    let randomSize = Math.random() * 90 + 10; // 10 - 100
    div.style.width = randomSize + "px";
    div.style.height = randomSize + "px";
    bubbles.appendChild(div);
}

setInterval(() => {
    let bubbles = document.getElementsByClassName("bubble");
    for (let i = 0; i < bubbles.length; i++){
        let currentStyle = parseFloat(bubbles[i].style.top)
        if (currentStyle < -25){
            bubbles[i].remove();
        } else {
            bubbles[i].style.top = (currentStyle - 0.05) + "vh";
        }
    }
}, 10);

setInterval(() => {
    makeBubble();
}, 1000);