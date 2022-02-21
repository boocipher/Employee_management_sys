// options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Welcome to Company EMS! What do you want to do next?'
    },
];

module.exports = questions