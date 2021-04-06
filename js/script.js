let btnClick = document.getElementById('onClick');
let partnerIcons = document.querySelectorAll('.partner-icon')
var btn = document.createElement("button");
var bodyPartners = document.getElementById("partners");
var arrayFromFile;
var arrayOfPartners = Array();
var arrayOfPictures = Array();


btnClick.addEventListener('click', function () {
    for (var partner of partnerIcons) {
        partner.style.display = 'none';
    }

    btn.className = "partnerShowBtn";
    btn.innerText = "Show partner";
    document.getElementById("partnersMain").append(btn);
    this.style.display = "none";

    let xhr = new XMLHttpRequest();
    let url = "js/array.json";

    xhr.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            arrayFromFile = this.response;

            arrayOfPartners = addImage(arrayFromFile);

        }
    }
    xhr.open("GET", url, true)
    xhr.responseType = 'json';
    xhr.send();

});

function addImage(arrayFromOutside) {
    arrayFromOutside.forEach(function (item) {
        {
            var image = new Image;
            image.className = item.className;
            image.src = item.src;
            image.alt = item.alt
            arrayOfPictures.push(image);
        }
    })
}

var counter = 0;
btn.addEventListener("click", function () {
    for (let i = 0; i < 3; i++) {
        setTimeout(temp, 2000 * (i + 1));
    }
})


function temp() {
    var div = document.createElement("div");
    div.className = "partner-item";
    var a = document.createElement("a");
    a.innerHTML = arrayOfPictures[counter++].outerHTML;
    div.prepend(a);
    bodyPartners.prepend(div);


}




