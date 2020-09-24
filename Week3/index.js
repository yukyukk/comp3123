var http = require("http");
//TODO - Use Employee Module here
var emp = require('Employee.js');
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

for (let key in emp.employees) {
    console.log(`${key} --> ${employees[key]}`);
}

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            console.log("<h1>Welcome to Lab Exercise 03</h1>");
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
        }

        if (req.url === '/employee') {
            console.log(emp.employees);
            //TODO - Display all details for employees in JSON format
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]

            let empNames = emp.employees.map(e => `${e.firstName} ${e.lastName}`)
            console.log(empNames.sort())
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }          

            let addedSalaries = {};
            let empSalaries = emp.employees.map(e => e.Salary);

            addedSalaries.total_salary = empSalaries.reduce((toAdd, total) => (toAdd + total));
            console.log(addedSalaries);

        }
        res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    })

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})