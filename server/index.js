//root file
const Hapi = require('@hapi/hapi');
const locationService = require('./services/location-service');
const searchService = require('./services/patient-service');
const monthlyService = require('./services/hiv-monthly-service');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    server.route([
        {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Angular Server Running...';
        }
    },
    {
        method: 'GET',
        path: '/location',
        handler: (request, h) => {
            return locationService.getAllLocations();
        }
    },
    {
        method: 'GET',
        path: '/patient-search',
        handler: (request, h) => {
            const patientsName = request.query.name
            //console.log(request.query);
            return searchService.search(patientsName);
        }
    },
    {
        method: 'GET',
        path: '/monthly',
        handler: (request, h) => {
            const monthlyString = request.query.month
            //console.log(request.query);
            return monthlyService.monthly(monthlyString);
        }
    },
    {
        method: 'GET',
        path: '/monthly-status-report/patient-list',
        handler: (request, h) => {
            let location = request.query.location;
            let month = request.query.month;   
            let status = ""; 
            if (request.query.status === "hiv-positive"){
                status="Positive"
            }else{
                status="Negative"
            }
            console.log(request.query);
            return monthlyService.patientreport(location,month,status);
        }
    }   
    ]);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();