'use strict'

describe('Thermostat', function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  })

  describe('default temperature', function () {
    it('starts at 20 degrees', function () {
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe('increase temperature', function () {
    it('can increase the temperature by 1 degree', function () {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    });
  });

  describe('decrease temperature', function () {
    it('can decrease the temperature by 1 degree', function () {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    });
  });

  describe('minimum temperature', function () {
    it('cannot decrease below 10 degree', function () {
      thermostat.temperature = 10;
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(10);
    });
  });

  describe('maximum temperature', function () {
    it('cannot increase above 25 degree on power saving mode', function () {
      thermostat.temperature = 25;
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(25);
    });

    it('cannot increase above 32 degree on power saving mode', function () {
      thermostat.offPowerSaving();
      for(var i = 0; i < 15; i++) { thermostat.up() };
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe('reset', function () {
    it('can reset temperature to 20', function () {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('energy usage', function () {
    it('describe 20 degree as medium usage', function () {
      expect(thermostat.energyUsage()).toEqual('Medium-usage');
    });

    it('describe 12 degree as low-usage', function () {
      thermostat.temperature = 12;
      expect(thermostat.energyUsage()).toEqual('Low-usage');
    });

    it('describe 30 degree as high-usage', function () {
      thermostat.temperature = 30;
      expect(thermostat.energyUsage()).toEqual('High-usage');
    });
  });

})
