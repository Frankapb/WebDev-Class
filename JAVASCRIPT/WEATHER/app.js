const _editIcon = document.querySelector('._edit');
const cityName = document.querySelector('.city')
const searchBody = document.querySelector('.search')

/****************************  */
const hour = document.querySelector('.hourly')
const hour_9 = hour.children[0].children[0];
const hour_12 = hour.children[1].children[0];
const hour_15 = hour.children[2].children[0];
const hour_18 = hour.children[3].children[0];
const hour_21 = hour.children[4].children[0];
const icon = document.querySelector('.icon').children[0];
const temp = document.querySelector('.temp').children[0];
const table = document.querySelector('table')
const pressure = table.children[0].children[0].children[1];
const humidity = table.children[0].children[1].children[1];
const wind = table.children[0].children[2].children[1];
const description = document.querySelector('.description');
const date = document.querySelector('.card').children[2];


class WeatherApplication {
    constructor(city) {
        this.city = city;
        this.baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=f6211bc24c258c57f7a7fba887afdd17`
        this.hourlyWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=f6211bc24c258c57f7a7fba887afdd17`
    }


    getCurrentWeather() {
        fetch(this.baseUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                /****************************** */
                let current_icon = data.weather[0].icon;
                icon.src = "https://openweathermap.org/img/wn/" + current_icon + "@2x.png";
                let temprature = data.main.temp;
                temp.innerHTML = getTempInCel(temprature);
                description.innerHTML = data.weather[0].description;
                pressure.innerHTML = data.main.pressure;
                humidity.innerHTML = data.main.humidity;
                wind.innerHTML = data.wind.speed;
                date.innerHTML = new Date().toLocaleDateString();

            })
    }

    getHourlyWeatherData() {
        /***************************************************** */
        fetch(this.hourlyWeather)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                let iconid_9 = data.list[0].weather[0].icon;
                let iconid_12 = data.list[1].weather[0].icon;
                let iconid_15 = data.list[2].weather[0].icon
                let iconid_18 = data.list[3].weather[0].icon
                let iconid_21 = data.list[4].weather[0].icon
                hour_9.src = "https://openweathermap.org/img/wn/" + iconid_9 + "@2x.png";
                hour_12.src = "https://openweathermap.org/img/wn/" + iconid_12 + "@2x.png";
                hour_15.src = "https://openweathermap.org/img/wn/" + iconid_15 + "@2x.png";
                hour_18.src = "https://openweathermap.org/img/wn/" + iconid_18 + "@2x.png";
                hour_21.src = "https://openweathermap.org/img/wn/" + iconid_21 + "@2x.png";
            });
    }


}



_editIcon.addEventListener('click', (e) => {
    e.preventDefault();

    const inputElement = `<input type="text" class="searchcity" placeholder="Enter a city name" />`
    console.log('hello')
    _editIcon.style.display = 'none'
    cityName.style.display = 'none'
    searchBody.insertAdjacentHTML('afterbegin', inputElement);

    document.querySelector('.searchcity').addEventListener('focusout', (e) => {
        console.log('focus out testing....')
        cityName.innerHTML = document.querySelector('.searchcity').value
        let weather = new WeatherApplication(document.querySelector('.searchcity').value)
        _editIcon.style.display = "inline"; // visible
        cityName.style.display = 'inline'; // visible
        searchBody.removeChild(searchBody.children[0])
        weather.getCurrentWeather();
        weather.getHourlyWeatherData();

    });

});

/************************************** */
//list[0].weather[0].icon


function getTempInCel(data) {
    let c;
    let k = data;
    c = k - 273;
    return Math.trunc((c));
}