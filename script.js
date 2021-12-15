var input = document.querySelector('.input_text');
var city = document.querySelector('.name');
var temp = document.querySelector('.temp')
var icon = document.querySelector('.icon');
var desc = document.querySelector('.desc')
var button = document.querySelector('.submit')

button.addEventListener('click' , function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='
  +input.value + 
  '&units=metric&appid=d67d296fd850ee455e8ba1f0a454ab9d')
  .then(response => response.json())
  .then((data) =>{

    var  cityValue = data['name'];
    var  tempValue = data['main']['temp'];
    var  descValue = data['weather'][0]['description']
    var iconValue =  data['weather'][0]['icon']
    var humValue = data['main']['humidity']

    city.innerHTML =  " Weather in "+ cityValue;
    temp.innerHTML  =  "Temp = " + tempValue + '°C';
    icon.src = "https://openweathermap.org/img/wn/" + iconValue + ".png";
    desc.innerHTML =  "Description = " + descValue;
    document.querySelector('.hum').innerHTML = "Humidity = " + humValue +"%";
    input.value =""


 })
  .catch((err) => alert('wrong city name'))
})

