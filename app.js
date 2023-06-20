let color = ""
let color2 = ""
const body = document.querySelector("body")
const button = document.getElementById("colorBtn")

function getRandomColor() {
    let color = "rgb(";
    for (let i = 0; i < 3; i++ ) {
        color += Math.floor(Math.random() * 256);
    if (i < 2) {
        color += ", "
    }
}
    color += ")";
    color2 += ")";
    return color;
};

function getDifferentColor() {
    let color = "rgb(";
    for (let i = 0; i < 3; i++ ) {
        color += Math.floor(Math.random() * 256);
    if (i < 2) {
        color += ", "
    }
}
    color += ")";
    return color;
};

document.getElementById("colorBtn").addEventListener("click", function() {
    color = getRandomColor()
    body.style.backgroundColor = color;
    console.log(color)
});

document.getElementById("colorBtn").addEventListener("click", function() {
    color = getDifferentColor()
    button.style.backgroundColor = color;
    console.log(color)
});