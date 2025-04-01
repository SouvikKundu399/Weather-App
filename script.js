let inp = document.querySelector("input")
let btn = document.querySelector("button")
let actual = document.querySelector("#actual")
let feelslike = document.querySelector("#feelslike")
let min = document.querySelector("#min")
let max = document.querySelector("#max")
let weather = document.querySelector("#weather")
let humidity = document.querySelector("#humidity") 
let speed = document.querySelector("#speed")
let heading = document.querySelector("h1")

btn.addEventListener("click",()=>{
    let ctName = inp.value
    console.log(ctName);
    if(!ctName){
        alert("Please Enter city Name")
        inp.value = ""
        heading.innerHTML = ''
        actual.innerHTML = ''
        feelslike.innerHTML=""
        min.innerHTML = ''
        max.innerHTML = ''
        weather.innerHTML =""
        humidity.innerHTML =''
        speed.innerHTML =''
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ctName}&appid=bcb3d05f043cbcadaf0518c8fdeec1f8&units=metric`
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        inp.value = ``
        heading.innerHTML = `${ctName.toUpperCase()}`
        actual.innerHTML = data.main.temp + "\u2103"
        feelslike.innerHTML = "Feels like : "+data.main.feels_like + "\u2103"
        min.innerHTML = "Min: "+data.main.temp_min + "\u2103"
        max.innerHTML = "Max : "+data.main.temp_max + "\u2103"
        weather.innerHTML = data.weather[0].description.toUpperCase()
        humidity.innerHTML = "Humidity: "+data.main.humidity+"%"
        speed.innerHTML = "Wind Speed : "+data.wind.speed + "(m/s)"
    })
    .catch(function(err){
        alert("Please Enter Valid city Name")
        inp.value = ""
        heading.innerHTML = ''
        actual.innerHTML = ''
        feelslike.innerHTML=""
        min.innerHTML = ''
        max.innerHTML = ''
        weather.innerHTML =""
        humidity.innerHTML =''
        speed.innerHTML =''
    })
})