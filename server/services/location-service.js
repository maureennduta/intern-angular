const con = require("../connection/connection");
const def = {
    getAllLocations   
}

function getAllLocations() {
    return new Promise((resolve, reject) => {
        con.connect().then(pool => {
            pool.query('SELECT name,id,date_format(date_created,"%Y-%m-%d") as date_created FROM locations;', function (error, results, fields) {
                if (error) throw reject(error);
                console.log('The solution is: ', results);
                resolve(results)

            });
        });
    })
}

module.exports = def

