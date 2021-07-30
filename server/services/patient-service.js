const con = require("../connection/connection");
const def = {
    search    
}
// Name,gender, dob, Age , contact details, hiv status.

function search(patientsName) {
    return new Promise((resolve, reject) => {
        con.connect().then(pool => {
            pool.query(`
            SELECT patients.patientId, patients.name, patients.gender, date_format(patients.dob,"%Y-%m-%d") AS dob, 
            patients.age, patients.phone_number, encounters.hiv_status
            FROM patients
            JOIN encounters ON patients.patientID = encounters.encounter_id
            WHERE name LIKE "%${patientsName}%"`,
                function (error, results, fields) {
                    if (error) throw reject(error);
                    console.log('The patients are: ', results);
                    resolve(results)
                });
        });
    })
}




module.exports = def


// `SELECT name,gender,date_format(dob,"%Y-%m-%d") as dob,age,phone_number,date_format(date_created,"%Y-%m-%d") as date_created FROM patients WHERE name LIKE"Erick";`


