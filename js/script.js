let btnClick = document.getElementById('onClick');
let partnerIcons = document.querySelectorAll('.partner-icon')
var btn = document.createElement("button");
var bodyPartners = document.getElementById("partners");

btnClick.addEventListener('click', function () {
    for (var partner of partnerIcons) {
        partner.style.display = 'none';
    }

    btn.className = "partnerShowBtn";
    btn.innerText = "Show partner";
    document.getElementById("partnersMain").append(btn);
    this.style.display = "none";
});


let xhr = new XMLHttpRequest()
let url = "js/array.json"


xhr.open("GET", url, true)
xhr.responseType = 'json';
xhr.send()

document.getElementById("demo").innerText = JSON.parse(xhr.responseText)





function addImage(n) {
    for (var arrayOfPictures = [], image, i = 1; i <= n; i++) {
        image = new Image;
        image.className = "partner-icon";
        image.src = "img/partners/partner" + i + ".png";

        arrayOfPictures.push(image);
    }
    return arrayOfPictures;
}


let arrayOfPartners = addImage(10);



var counter = 0;
btn.addEventListener("click", function () {
    for (let i = 0; i < 3; i++) {
        setTimeout(temp, 2000 * (i +1))
    }
})


function temp() {
    var div = document.createElement("div");
    div.className = "partner-item";
    var a = document.createElement("a");
    a.innerHTML = arrayOfPartners[counter++].outerHTML;
    div.prepend(a);
    bodyPartners.prepend(div);



}








