$(document).ready(function () {

  var thermostat = new Thermostat();

  $('#temp-up').click(function () {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function () {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function () {
    thermostat.reset();
    updateTemperature();
  });

  $('#on-power-save').click(function () {
    thermostat.onPowerSaving();
    $('#power-saving-status').text(thermostat.powerSavingMode);
  });

  $('#off-power-save').click(function () {
    thermostat.offPowerSaving();
    $('#power-saving-status').text(thermostat.powerSavingMode);
  });

  function updateTemperature () {
    $('#temperature').text(thermostat.getTemperature() + degCelcius);
    $('#energy-usage').text(thermostat.energyUsage());
    $('#energy-usage').attr('class', thermostat.energyUsage());
  }

  var days = [7, 14, 21, 28, 35]
  var degCelcius = String.fromCharCode(176) + "C"

  days.forEach(function (day) {
    $.get('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=f5b07fabefe925c02fbd0a986d0f9541&units=metric', function(data) {
      var today = data.list[day].dt_txt
      var formattedDay = today.slice(8,10) + '/' + today.slice(5,7)
      console.log(data.list[day]);
      $('#weather' + day).addClass("owf-" + data.list[day].weather[0].id)
      $('#list' + day).text(formattedDay)
      $('#temp' + day).text(data.list[day].main.temp + degCelcius);
    })
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=f5b07fabefe925c02fbd0a986d0f9541&units=metric', function(data) {
    $('#outdoor-temp').text(data.main.temp + degCelcius)
    $('#outdoor-temp').append("<p id='outdoor-temp-des'> now</p>")

  })


});
