let requestAPI = new XMLHttpRequest();
let curl = "http://api.openweathermap.org/data/2.5/weather?id=706483&appid=27a14e390c73ce9b9fdbb577eef688f1";
let weather;

requestAPI.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      weather = this.response;
        document.querySelector('.weather__city').textContent = weather.name;
        document.querySelector('.weather__forecast').innerHTML = Math.round(weather.main.temp - 273) + '&deg;';
        document.querySelector('.weather__desc').textContent = weather.weather[0]['description'];
        console.log(weather);
    }

}
requestAPI.open("GET", curl, true)
requestAPI.responseType = 'json';
requestAPI.send();


//Реализация через fetch
//Получаем прогноз в массив weather
// let urlWeather = 'http://api.openweathermap.org/data/2.5/weather?id=706483&lang=ru&appid=27a14e390c73ce9b9fdbb577eef688f1';
// fetch(urlWeather).then(function (resp) {return resp.json() }).then(function (weather) {
//     //добавляем название города
//     document.querySelector('.weather__city').textContent = weather.name;
//     console.log(weather);
//     //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
//     document.querySelector('.weather__forecast').innerHTML = Math.round(weather.main.temp - 273) + '&deg;';
//     //Добавляем описание погоды
//     document.querySelector('.weather__desc').textContent = weather.weather[0]['description'];
// })

