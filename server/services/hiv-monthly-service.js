const con = require("../connection/connection");
const def = {
    monthly,
    patientreport
}
// Name,gender, dob, Age , contact details, hiv status.

function monthly(monthlyString) {
    return new Promise((resolve, reject) => {
        con.connect().then(pool => {
            pool.query(`SELECT 
            date_format(e.encounter_datetime,"%Y-%m") AS Month,
            l.name AS Location,
            COUNT(DISTINCT CASE
                    WHEN hiv_status = 'Positive' THEN hiv_status
                END) AS Positive,
            COUNT(DISTINCT CASE
                    WHEN hiv_status = 'NEGATIVE' THEN hiv_status
                END) AS Negative
        FROM
            testDatabase.encounters e
                JOIN
            testDatabase.locations l ON l.id = e.location_id
        WHERE
            e.hiv_status IN ('Positive' , 'NEGATIVE')
                AND date_format(e.encounter_datetime,"%Y-%m") = '${monthlyString}'
        GROUP BY Location , Month`,
                function (error, results, fields) {
                    if (error) throw reject(error);
                    console.log('HIV monthly report: ', results);
                    resolve(results)
                });
        });
    })
}

function patientreport(location, month, status) {
    return new Promise((resolve, reject) => {
        con.connect().then(pool => {
            const sql = `
            SELECT p.name, date_format(e.encounter_datetime,"%Y-%m-%d") as encounter_datetime,
             l.name as location,e.hiv_status,p.gender,p.age FROM testDatabase.encounters e 
             INNER JOIN testDatabase.patients p ON e.patientId= p.patientId INNER JOIN testDatabase.locations l ON e.location_id=l.id  
             WHERE e.hiv_status='${status}' AND l.name='${location}' AND date_format(encounter_datetime,"%Y-%m")='${month}'`;
            console.log("sql", sql);
            pool.query(sql,
                function (error, results, fields) {
                    if (error) throw reject(error);
                    console.log('HIV-Patients: ', results);
                    resolve(results)
                });
        });
    })
}

module.exports = def

