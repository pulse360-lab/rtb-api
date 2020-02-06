class apiClientBase{
    constructor(client){
        this.client = client;
        this.httpClient = require('../../../rtb-telegram-bot/helper/http-client');
    }
    setBaseUri(url){
        this.baseUrl = url;
    }

    getStopInformation(id){
        return null;   
    }

    getRealTimeInformation(routeId, param){
        return null;
    }

    getStopsNearMe(param){
        return null;
    }

    getAllStop(){
        
    }
}

module.exports = apiClientBase;