'use strict'

function Thermostat () {
  this.temperature = 20;
  this.powerSavingMode = "On";
}

Thermostat.prototype.getTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.up = function () {
  if (this.isPowerSaving() && this.temperature < 25) { this.temperature++ }
  if (this.notPowerSaving() && this.temperature < 32) { this.temperature++ }
};

Thermostat.prototype.down = function () {
  if(this.temperature > 10) { this.temperature-- }
};

Thermostat.prototype.onPowerSaving = function () {
  this.powerSavingMode = "On";
};

Thermostat.prototype.offPowerSaving = function () {
  this.powerSavingMode = "Off";
}

Thermostat.prototype.isPowerSaving = function () {
  return this.powerSavingMode === "On";
}

Thermostat.prototype.notPowerSaving = function () {
  return this.powerSavingMode === "Off";
}

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  if(this.temperature < 18) {
    return 'Low-usage'
  } else if(this.temperature < 25) {
    return 'Medium-usage'
  } else {
    return 'High-usage'
  }
};
