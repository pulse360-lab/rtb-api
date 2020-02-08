const apiBase = require('../api-client-base');
const routes = require('./route-list.json');

class dublinApi extends apiBase{
    constructor(){
        super("Dublin");
        super.setBaseUri("https://data.smartdublin.ie/cgi-bin/rtpi/");
    }

    async getStopInformation(param){
        let result = await this.httpClient.get(`${ this.baseUrl }busstopinformation?stopid=${param.stopNumber}&format=json`);

        return result.errorcode === "1" 
                                ? {error: {message: result.errormessage}} 
                                : require('./responses/stop-information').mapObjectResult(result);
    }

    async getRealTimeInformation(param){
        let result = await this.httpClient.get(`${ this.baseUrl }realtimebusinformation?stopid=${param.stopNumber}&routeid=${param.routeId}&operator=${param.operator}`);

        return result.errorcode === "1" 
                                ? {error: {message: result.errormessage}} 
                                : require('./responses/realtime-information').mapObjectResult(result);
    }

    getStopsNearMe(param){
        var stops = [];

        require('./route-list.json.js').forEach(f => {
            if(f.latitude >= locationRange.minLat && f.latitude <= locationRange.maxLat && f.longitude >= locationRange.minLon && f.longitude <= locationRange.maxLon)
                stops.push({stopId: f.stopid, name: f.fullname});
        });
        return stops;
    }
}

module.exports = dublinApi;