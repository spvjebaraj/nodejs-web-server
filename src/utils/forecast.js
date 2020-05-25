const request = require("request");

const forecast = (lat, lng, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=4219520efbc1eeb174972ed515a67a0f&query=" +
    lat +
    "," +
    lng +
    "&units=f";

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const data = body.current;
      var message =
        data.weather_descriptions[0] +
        `. It is currently ${data.temperature} degress out. It feels liks ${data.feelslike} degrees out. Humidity is ${data.humidity}%.`;
      callback(undefined, message);
    }
  });
};

module.exports = forecast;
