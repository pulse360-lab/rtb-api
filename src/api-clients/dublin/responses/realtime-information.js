const operators = require('./operators');

const mapObjectResult = result => {
     var obj = {};
     obj.busInfo = [];
        for (let index = 0; index < result.results.length; index++) {
            obj.busInfo.push({
                arrivalTime: result.results[index].arrivaldatetime,
                duetime: result.results[index].duetime + (result.results[index].duetime === "1" ? " minute" : " minutes"),
                origin: result.results[index].origin,
                destination: result.results[index].destination
            });
            
        }
     return obj;
 }

 module.exports = { mapObjectResult };