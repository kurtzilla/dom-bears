// var headerArray = document.getElementsByTagName("h1");
//
// console.log(headerArray[0]);
// console.log(headerArray[1]);

// var bearliArray = document.getElementsByClassName("bearname");
// console.log(bearliArray[0]);
//
// var picture = document.getElementById("mainpicture");
//
// picture.src = "http://placekitten.com/233/433";
// picture.className = 'kittenimage';
//console.log(picture);

var body = document.getElementsByTagName("body")[0];
var newImg = document.createElement("img");
var newH1 = document.createElement("h1");
var newP = document.createElement("p");
body.appendChild(newImg);
body.appendChild(newH1);
body.appendChild(newP);

newH1.innerText = "Cats have invaded";
newImg.src = "http://placekitten.com/233/345";
newP.innerText = "We're here to take over your pages!";
