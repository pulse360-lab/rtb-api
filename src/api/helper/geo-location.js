var GeoLocation = GeoLocation ? GeoLocation : {
    TO_RADIAN: 0.0174532925,
    TO_DEGREE: 57.2957795,
    EARTH_RADIUS: 6371.01,
    TO_MILE: 0.621371192,
    TO_KM: 1.609344,
    MIN_LAT: function() { return GeoLocation.degreeToRadian(-90) },
    MAX_LAT: function() { return GeoLocation.degreeToRadian(90) },  
    MIN_LON: function() { return GeoLocation.degreeToRadian(-180) },  
    MAX_LON: function() { return GeoLocation.degreeToRadian(180) },  
    
    degreeToRadian: function (degree) { return degree * GeoLocation.TO_RADIAN },
    radianToDegree: function (radian) { return radian * GeoLocation.TO_DEGREE },
    kmToMile: function (km) {return km * GeoLocation.TO_MILE },
    mileToKm: function (mile) {return mile * GeoLocation.TO_KM },
  
    buildLocationRange: function(latitude, longitude, boundaryInMiles) {
      var degLat = latitude;
      var degLon = longitude;
      var radLat = GeoLocation.degreeToRadian(degLat);
      var radLon = GeoLocation.degreeToRadian(degLon);
      
      var location = {  degLat: degLat
                      , degLon: degLon
                      , radLat: radLat
                      , radLon: radLon
                     };
  
      GeoLocation.checkBounds(location);
      var locationRange = GeoLocation.boundingCoordinates(location, GeoLocation.mileToKm(boundaryInMiles));
      
      return locationRange;
    },
    
    checkBounds: function(location) {
      if (location.radLat < GeoLocation.MIN_LAT || location.radLat > GeoLocation.MAX_LAT ||
          location.radLon < GeoLocation.MIN_LON || location.radLon > GeoLocation.MAX_LON) {
            console.log("radLat or radLon is out of bounds");
      }  
    },
    
    distance: function(location1, location2) {
      return Math.acos(Math.sin(location1.radLat) * Math.sin(location2.radLat) +
          Math.cos(location1.radLat) * Math.cos(location2.radLat) *
          Math.cos(location1.radLon - location2.radLon)) * GeoLocation.EARTH_RADIUS;
    },
    
    boundingCoordinates: function(location, distance) {
      if (!location || distance < 0) {
        console.log("no location or distance");
        return;
      }
      
      var radius = GeoLocation.EARTH_RADIUS;
      var radDist = distance / radius;
      var minLat = location.radLat - radDist;
      var maxLat = location.radLat + radDist;
  
      var minLon, maxLon;
      
      if (minLat > GeoLocation.MIN_LAT() && maxLat < GeoLocation.MAX_LAT()) {
        var deltaLon = Math.asin(Math.sin(radDist) / Math.cos(location.radLat));
        minLon = location.radLon - deltaLon;
        if (minLon < GeoLocation.MIN_LON()) minLon += 2 * Math.PI;
        maxLon = location.radLon + deltaLon;
        if (maxLon > GeoLocation.MAX_LON()) maxLon -= 2 * Math.PI;
      } else {
        // a pole is within the distance
        minLat = Math.max(minLat, GeoLocation.MIN_LAT());
        maxLat = Math.min(maxLat, GeoLocation.MAX_LAT());
        minLon = GeoLocation.MIN_LON();
        maxLon = GeoLocation.MAX_LON();
      }
      
      var locationRange = {  lat: location.degLat
                        , lon: location.degLon
                        , minLat: GeoLocation.radianToDegree(minLat)
                        , maxLat: GeoLocation.radianToDegree(maxLat)
                        , minLon: GeoLocation.radianToDegree(minLon)
                        , maxLon: GeoLocation.radianToDegree(maxLon)
                       };
      return locationRange;
    }  
    
  }

  const get = (latitude, longitude, boundaryInMiles) => GeoLocation.buildLocationRange(latitude, longitude, boundaryInMiles)
  

  module.exports = {get};