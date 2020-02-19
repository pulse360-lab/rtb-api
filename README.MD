[![CircleCI](https://circleci.com/gh/pulse360-lab/rtb-api/tree/master.svg?style=svg](https://circleci.com/gh/pulse360-lab/rtb-api/tree/master)
[![Build Status](https://travis-ci.org/pulse360-lab/rtb-api.svg?branch=develop)](https://travis-ci.org/pulse360-lab/rtb-api)
![GitHub contributors](https://img.shields.io/github/contributors/realtime-bus/node-api.svg)
![App Version](https://img.shields.io/badge/dynamic/json?color=orange&label=realtime-bus&prefix=v&query=version&suffix=beta&url=https%3A%2F%2Fraw.githubusercontent.com%2Fpulse360-lab%2Frtb-api%2Fdevelop%2Fpackage.json)

[![Edit with Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/pulse360-lab/rtb-api)

# realtime-bus-api 
this API is a kind of Gateway that match the proper API by passing parameters such GeoLocation. It returns information for all API supported and developed by now.
* Buses Delay  
* Routes  
* And more...  

## Built with  
NodeJs https://nodejs.org/en/docs/  

## APIs  
https://eu1.locationiq.com  

### APIs Transport support by now:
- [x] Dublin API

## Development Plans  
- [ ] London API - Next developement
- [ ] Sao Paulo API - Next developement

## CI & CD Flow  
[todo]  

## Try it yourself  
### Dependencies  
* docker  
### Step #1  
```
docker run -d -e RTB_API_TOKEN=<YOUR_BOT_TOKEN> realtimebus-api:develop
```  

### Step #2  
```
Access using http://localhost:3000/api/v1
```  
### Step #3  
```
There is no step 3 ;) API is up and running for test
```  

## Contributing  
[todo]  


