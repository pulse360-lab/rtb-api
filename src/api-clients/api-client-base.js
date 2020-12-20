class apiClientBase{
    constructor(client){
        this.client = client;
        this.httpClient = require('../helper/http-fetch');
    }

    setLanguage(language){
        this.language = language;
    }

    setResource(resource){
        this.resource = resource;
    }
    
    setBaseUri(url){
        this.baseUrl = url;
    }
    
    getStopInformation(id){
        return null;   
    }

    getRealTimeInformation(param){
        return null;
    }

    getStopsNearMe(param){
        return null;
    }

    getAllStop(){
        
    }
}

module.exports = apiClientBase;