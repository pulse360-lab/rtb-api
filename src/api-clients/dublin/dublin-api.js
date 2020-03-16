const apiBase = require('../api-client-base');
const routes = require('./route-list.json');
const config = require('../../../config.json');
const language = require('./languages/language');

class dublinApi extends apiBase{
    constructor(language){
        super(config.apis.dublin.key);
        super.setBaseUri(config.apis.dublin.url);
    }

    
    getResult(map, result){
        return result && result.errorcode === "0" 
        ? map.mapObjectResult(result)
        : {error: {message: this.resource.error_message}};
    }

    async getStopInformation(param){
        this.resource = language.getResource(param.language);
        let response = await this.httpClient.get(`${ this.baseUrl }busstopinformation?stopid=${param.stopNumber}&format=json`);
        var result =  this.getResult(require('./responses/stop-information'), response);
        return result;
    }

    async getRealTimeInformation(param){
        this.resource = language.getResource(param.language);
        let response = await this.httpClient.get(`${ this.baseUrl }realtimebusinformation?stopid=${param.stopNumber}&routeid=${param.routeId}&operator=${param.operator}`);
        var result =  this.getResult(require('./responses/realtime-information'), response);
        return result;
    }

    getStopsNearMe(locationRange){
        var stops = [];

        routes.forEach(f => {
            if(f.latitude >= locationRange.minLat && f.latitude <= locationRange.maxLat && f.longitude >= locationRange.minLon && f.longitude <= locationRange.maxLon)
                stops.push({stopId: f.stopid, name: f.fullname});
        });
        return stops;
    }
}

module.exports = dublinApi;