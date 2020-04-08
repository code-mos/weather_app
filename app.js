// const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const yargs = require('yargs');

// const url = 'https://api.darksky.net/forecast/e836563bdf694641a853a1fa9e01bf14/37.8267,-122.4233';

// request({url: url}, (error,response) => {
//     const data = JSON.parse(response.body);
//     console.log(data.currently)
// });

// request({url: url, json: true}, (error,response) => {
//     // const data = JSON.parse(response.body);
//     if(error) {
//         console.log('Unable to connect to weather API');
//     } else if(response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.currently);
//     }
// });

// const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWlsZWthZzAxIiwiYSI6ImNqdGZ2dDg0dTF4OTgzeXQ1aWNxbm9qbGUifQ.cY67Gs5VsVTLZq-vdAow7A&limit=1'

// request({url: geocodeURL, json: true},(error, response) => {
//     if(error) {
//         console.log('UNable to connect to API');
//     } else if(response.body.features.length===0) {
//         console.log('Unable to fetch location coordinates')
//     } else {
//         // console.log(response.body.features[0].center);
//         const lat = response.body.features[0].center[1];
//         const long = response.body.features[0].center[0];
//         console.log('lat: ',lat);
//         console.log('long: ',long);
//     }
// })

yargs.command({
    command: 'fetch',
    describe: 'Fetch weather of given location',
    builder: {
        location: {
            describe: 'Location',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {

    // ----CALLBACK CHAINING-----------------------------------------------
        geocode(argv.location,(error,data) => {

            if(error) {
                console.log(error);
            } else {
                console.log('Latitude: ', data.latitude);
                console.log('Longitude: ', data.longitude);
                console.log('Location: ', data.location);
    
                forecast(data.latitude,data.longitude,(err,res) => {
                    if(err) {
                        console.log('Error: ', err);
                    } else {
                        console.log('Temperature: ',res.temperature);
                        console.log('Summary: ', res.summary);
                    }
                })
            }
        });
    // --------------------------------------------------- 
    
    }
})

yargs.parse();




// ---> Steps:
// 1: Create HTTP Request for weather api(dark sky)
// 2. Access user location using geolocation(mapbox)
// 3. Try to figure out data required from fetched objects
// 4. 