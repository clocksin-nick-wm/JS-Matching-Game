var numberofFaces = 5;
var leftSide = document.getElementById("left");
var rightSide = document.getElementById("right");
var theBody = document.getElementById("body")[0];
function generateFaces() {
    for (var i = 0; i < numberofFaces; i++) {
        var img = document.createElement("img");
        var x = Math.random()*400/1;
        var y = Math.round(x);
        var f = Math.random()*400/1;
        var z = Math.round(f);
        img.src = "Manning.png";
        img.width = "150";
        img.height = "150";
        img.style.top =  y + "px";
        img.style.left =  z  + "px";
        leftSide.appendChild(img);
    }
    var leftSideImage = leftSide.cloneNode(true);
    leftSideImage.removeChild(leftSideImage.lastChild);
    rightSide.appendChild(leftSideImage);
    leftSide.lastChild.onclick = function nextLevel(event){
        event.stopPropagation();
        leftSide.innerHTML = "";
        rightSide.innerHTML = "";
        if (numberofFaces == 20){
            alert("You win");
            generateFaces();
        }
        else
        {
            numberofFaces += 5;
            generateFaces();
        }
    };
    document.body.onclick = function gameOver() {
        alert("Game Over!");

        document.body.onclick = null;
        leftSide.lastChild.onclick = null;
    };

}

