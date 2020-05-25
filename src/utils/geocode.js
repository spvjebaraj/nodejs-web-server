const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoic3B2amViYXJhaiIsImEiOiJja2FsNGtrdnAwcXlrMndtd2pyeXhjamt3In0.FuRG4nr2j9dsCoqeOApp5A&limit=1";

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback(
        "Unable to get the location. Please try again with valid one.",
        undefined
      );
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
