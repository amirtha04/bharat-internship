const apiKey = '995f1e089c59c653762877fb831930bb';
const searchBtn = document.getElementById('submitButton');
const cityInput = document.getElementById('textBox');
const resultDiv = document.getElementById('grid2');

function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temp = Math.round(data.main.temp);
      const description = data.weather[0].description;
      const result = `<br>City: ${data.name} <br><br> Temperature: ${temp}&deg;C <br><br> Sky Conditions: ${description} <br><br> Wind Speed: ${data.wind.speed} m/s <br> <br>`;
      resultDiv.innerHTML = result;
    })
    .catch(error => {
      console.error(error);
      resultDiv.innerHTML = 'Error fetching weather data.';
    });
}

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});