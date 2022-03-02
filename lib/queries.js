const cTable = require('console.table');
const inquirer = require('inquirer');
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
renderDepartments() {
    // Query database
    return this.db.promise().query('SELECT * FROM departments').then( ([rows,fields]) => {
        return rows;
    });
}

addDepartment(departmentName) {
   return this.db.promise().query('INSERT INTO departments (name) VALUES (?)', departmentName);
} 

renderRoles() {
    // Query database
    return this.db.promise().query('SELECT * FROM roles');
}

addRole(title, salary, departmentId) {
   return this.db.promise().query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
} 

renderEmployees() {
    return this.db.promise().query('SELECT * FROM employees');
}


// -- add an employee
// TODO addEmployee()

// -- update an employee role
// TODO updateEmpRole

//BONUS
//TODO renderManagers()

// -- * BONUS: Update employee managers.
// -- * BONUS: View employees by manager.
// -- * BONUS: View employees by department.
// -- * BONUS: Delete departments, roles, and employees.
// -- * BONUS: View the total utilized budget of a department&mdash;
// -- in other words, the combined salaries of all employees in that department.

}

module.exports = Queries;