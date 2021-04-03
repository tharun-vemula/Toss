function spin(){

let photo = new Array("head.jpg", "tail.jfif");
var ran = Math.floor(Math.random() * photo.length);
document.getElementById("image").src = photo[ran];

}