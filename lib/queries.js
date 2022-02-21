const cTable = require('console.table');
const mysql = require('mysql2');

// creates class with query methods
class Queries {
    constructor() {
                // Connect to database
        this.db = mysql.createConnection(
            {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'company_db'
            },
            console.log(`Connected to the company_db database.`)
        );
    }

// I am presented with the following options: 
// view all departments, 
viewDepartments() {
        // Query database
    this.db.query('SELECT * FROM departments', function (err, results) {
        console.table(results);
    });
}

// -- view all roles, 
// -- view all employees, 
// -- add a department, 
// -- add a role, 
// -- add an employee, and 
// -- update an employee role
// -- * BONUS: Update employee managers.
// -- * BONUS: View employees by manager.
// -- * BONUS: View employees by department.
// -- * BONUS: Delete departments, roles, and employees.
// -- * BONUS: View the total utilized budget of a department&mdash;
// -- in other words, the combined salaries of all employees in that department.

}

module.exports = Queries;