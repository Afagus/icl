// let requestAPI = new XMLHttpRequest();
// let curl = "http://api.openweathermap.org/data/2.5/weather?id=706483&appid=27a14e390c73ce9b9fdbb577eef688f1";
// let weather;
//
// requestAPI.onreadystatechange = function () {
//     if (this.status === 200 && this.readyState === 4) {
//       console.log(this.requestAPI);
//     }
//
// }
// requestAPI.open("GET", curl, true)
// requestAPI.responseType = 'json';
// requestAPI.send();

//Получаем прогноз в массив data
fetch('http://api.openweathermap.org/data/2.5/weather?id=706483&lang=ru&appid=27a14e390c73ce9b9fdbb577eef688f1').then(function (resp) {return resp.json() }).then(function (data) {
    //добавляем название города
    document.querySelector('.weather__city').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
})
