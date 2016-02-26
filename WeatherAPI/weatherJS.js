//navigator.geolocation checks for whether users allow for getting current location
//getCurrentPosition grabs the location

var weatherCondition;
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

      var url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=207b00ddde66a60a515d6cf1a252ca39";

    console.log(url);

    function getWeather(callback){
      $.ajax({
      dataType:"jsonp",
      url:url,
      success: callback
     });
    }
    getWeather(function (data) {

      city = data.name;
      country = data.sys.country;
      weatherCondition = data.weather[0].main;
      weatherDescription = data.weather[0].description;
      kelvin = data.main.temp;
      parsedkelvin = parseFloat(kelvin);
      console.log(parsedkelvin);
      celcius = (parsedkelvin-273.15).toFixed(2);
      feh = parseFloat(celcius)*(9/5)+32.00;
      console.log(feh);
      $("#location").html(city+", "+country);
      $("#weatherCondition").html(weatherCondition+" : "+weatherDescription);

      console.log($('#toggle').attr('class'));
      $("#celcius").html("Temp: "+celcius+"°C");
      //drizzle,clouds,rain,snow,clear,thunderstorm
      $(".togglecelcius").html("°F");{
         $("#celcius").html("Temp: "+celcius+"°C");
      }
      $("#toggle").click(function(){
        if($(this).attr('class')=="togglecelcius"){
          $(this).removeClass('togglecelcius');
          $(this).addClass('togglefehren');
          $(this).html("°F");
          $("#celcius").html("Temp: "+feh+"°F");
        }else{
          $(this).removeClass('togglefehren');
          $(this).addClass('togglecelcius');
          $(this).html("°C");
          $("#celcius").html("Temp: "+celcius+"°C");
        }
      });
      if(weatherCondition.toLowerCase() == 'clouds'){
        imgSrc = "<img src='http://res.freestockphotos.biz/pictures/15/15146-illustration-of-a-stormy-cloud-pv.png' style='width:200px;'></img>";
      }else if(weatherCondition.toLowerCase() == 'drizzle'){
        imgSrc = "<img src='http://res.freestockphotos.biz/pictures/15/15143-illustration-of-a-stormy-cloud-with-light-rain-pv.png' style='width:200px;'></img>";
      }else if(weatherCondition.toLowerCase() == 'rain'){
        imgSrc = "<img src='http://www.cavagnac.com/templates/cavagnac/inc_files/weather/rain.png' style='width:200px;'></img>";

      }else if(weatherCondition.toLowerCase() == 'snow'){
        imgSrc = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Weather-snow.svg/2000px-Weather-snow.svg.png' style='width:200px;'></img>";

      }else if(weatherCondition.toLowerCase() == 'clear'){
        imgSrc = "<img src='http://www.clker.com/cliparts/E/m/H/T/6/Z/weather-clear-md.png' style='width:200px;'></img>";

      }else if(weatherCondition.toLowerCase() == 'thunderstorm'){
        imgSrc = "<img src='https://cdn2.iconfinder.com/data/icons/weather-24/256/Storm-512.png' style='width:200px;'></img>";

      }
      $("#weatherImage").html(imgSrc);
    });
  });

}
