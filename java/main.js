var country;  // global var
  
document.getElementById('weatherIcon').style.display = "none";
  document.getElementById('weatherClear').style.display = "none";
  document.getElementById('weatherhumidity').style.display = "none";
  document.getElementById('weatherRain').style.display="none";
  document.getElementById('weatherCondi').innerText = "";
  document.getElementById('Mistt').style.display = "none"
 
function weather() {
 

  function fetchweather(e) {
  /// is funciton me main data print bhi krwa skta hu

  document.getElementById('weatherIcon').style.display = "none";
  document.getElementById('weatherClear').style.display = "none";
  document.getElementById('weatherhumidity').style.display = "none";
  document.getElementById('weatherRain').style.display="none";
  document.getElementsByClassName('container')[0].style.background = "";
   document.getElementsByClassName('container')[0].style.background = "";
 document.getElementsByClassName('container')[0].style.color = ""
 document.getElementById('weatherCondi').innerText = "";
 document.getElementById('Mistt').style.display = "none"


  fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${e}&appid=c8b41bf810889a2ede9d4bb797daceb6`).then((res) => { 
  
    return res.json()    
  }).then((data) => {

     console.log(data)
    if(data.cod ==="404"){

      document.getElementById('weatherIcon').style.display = "none";
document.getElementById('weatherClear').style.display = "none";
document.getElementById('weatherhumidity').style.display = "none";
document.getElementById('weatherRain').style.display="none";
document.getElementById('Mistt').style.display = "none"
document.getElementsByClassName('container')[0].style.background = "";
document.getElementsByClassName('container')[0].style.background = "";
document.getElementsByClassName('container')[0].style.color = ""
document.getElementById("description").innerText = "N/A";
document.getElementById("visibiC").innerText= "N/A";
document.getElementById("visibi").innerText = "N/A";
document.getElementById('weatherCondi').innerText = ""; //weather condition
document.getElementById('location').innerText = ""; // location rest
document.getElementById('countryy').innerText = ""; // country rest 
document.getElementById('temperature').innerText = ""; // temperature rest



    }
  document.getElementById('countryy').innerText =  `${data.sys.country}`;
    let location = document.getElementById('location')
    /// heading or country ko update kr rha hu
   
    location.innerText=e.toUpperCase()
      document.getElementById('temperature').innerText = `${data.main.temp} °C ` ;

     document.getElementById('weatherCondi').innerText =`${data.weather[0].main}` /// weather condition "cloud ,rain haze fog"
              
            let iconUpdate = `${data.weather[0].main}`
           
           
          
      
        
        
        console.log(data.weather[0].main)
            if(iconUpdate === 'Clouds'){
          document.getElementsByClassName('container')[0].style.background = "url('../media/back/cloud.jpeg')";
                document.getElementById('weatherIcon').style.display = "block"
          
         }
         if(iconUpdate === "Mist"){
          document.getElementById('Mistt').style.display = "block"
          document.getElementsByClassName('container')[0].style.background = "url('../media/back/mist.jpg')";
      document.getElementsByClassName('container')[0].style.color = "white"
         }
        if(iconUpdate === "Clear"){
        document.getElementById('weatherClear').style.display = "block"
        } 
        if(iconUpdate ==="Humidity"){
          document.getElementById('weatherhumidity').style.display='block'
          document.getElementsByClassName('container')[0].style.background = "url('../media/back/humidity.jpg')"
        }
          if(iconUpdate ==="Rain"){
            document.getElementById('weatherRain').style.display="block";
            document.getElementsByClassName('container')[0].style.background = "url('../media/back/rain.jpg')"
         document.getElementsByClassName('container')[0].style.color = "white"
         
        }
        document.getElementById("description").innerText = `${data.wind.speed} meter/sec`
        document.getElementById("visibiC").innerText= `${data.main.
humidity}%`
          document.getElementById("visibi").innerText = `${data.visibility / 1000}km`
         
                

    
     
  })
       


  
  }  ///  fetchweather function



  document.getElementById("locationInput").addEventListener('input', inputsearch)  //  input :- is keyword s humko value bhi milti hai or click event bhi hota hai 
  function inputsearch() {
    let getInput =document.getElementById('locationInput').value

  fetchweather(getInput)

 
        }

        



 













} // funciton weather
weather()