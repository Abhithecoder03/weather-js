


const butt=document.getElementById("searchicon");


async function getcurrentlocation(){
    // const ipadd= await fetch('http://api.ipify.org/?format=json');
    // var ipa=await ipadd.json()
    // const ip=ipa.ip
    // const res=await fetch("ipinfo.io/[IP address]?token=a3a1f9da8f5d72");
    // var loc= await res.json();
    // console.log(loc)
    // document.getElementById("input").value=loc.currentCity;
    const request = await fetch("https://ipinfo.io/json?token=")
const jsonResponse = await request.json()

document.getElementById("input").value=jsonResponse.city

    }


butt.addEventListener("click",function(e){
    const apikey="";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    

    document.querySelector(".weather").style.display="block"
    const text=document.getElementById("input").value;
    

    async function checkweather(text){
        const response= await fetch(apiurl+text+`&appid=${apikey}`);
        if(response.status==404){
            document.querySelector(".error").style.display="block"
        }
        else{
        var data= await response.json();
        console.log(data)
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.main.temp+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".Wind").innerHTML=data.wind.speed+"km/h";

        //weather icon change

        const weathericon=document.querySelector(".weather-icon");
        console.log(data.weather[0].main)

        if(data.weather[0].main=="Clouds"){
            weathericon.src="image/clouds.png";
            console.log("ic",weathericon.src)
        }
        else if(data.weather[0].main=="Clear"){
            console.log("clear")
            weathericon.src="image/clear.png";
            console.log("ic",weathericon.src)

        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="image/rain.png";
        }else if(data.weather[0].main=="Drizzle"){
            weathericon.src="image/drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            weathericon.src="image/mist.png";
        }

        document.querySelector(".error").style.display="none"
    }  
        
    }
    checkweather(text)
   
    
})





