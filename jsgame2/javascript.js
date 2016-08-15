var numberofFaces = 5;
var leftSide = document.getElementById("left");
function generateFaces() {
    var img = document.createElement("img");

        img.src = "Manning.png";
        img.width = "150";
        img.height = "150";
        img.style.top = Math.random() * 400 + "px";
        img.style.left = Math.random() * 400 + "px";
        leftSide.appendChild(img);

}