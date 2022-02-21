// options: view all departments, view all roles, view all employees, 
// add a department, add a role, add an employee, and update an employee role
// -- * BONUS: Update employee managers.
// -- * BONUS: View employees by manager.
// -- * BONUS: View employees by department.
// -- * BONUS: Delete departments, roles, and employees.
const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'userChoice',
        message: 'Welcome to Company EMS! What do you want to do next?',
        choices: ['View all Departments', 'Add a Department', 'View all Roles', 'Add a Role', 'View all Employees', 'Add an Employee', 'Update Employee Role']
    },
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department?',
        when: (answers => answers.userChoice == 'Add a Department'),
    },
    {
        type: 'input',
        name: 'roleTitle',
        message: 'What is the title of the new role?',
        when: (answers => answers.userChoice == 'Add a Role')
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: 'What is the salary for the new role?',
        when: (answers => answers.userChoice == 'Add a Role')
    },
    {
        type: 'list',
        name: 'roleDepartment',
        message: 'What is the department of the new role?',
        choices: async function departments() {return renderDepartments()},
        when: (answers => answers.userChoice == 'Add a Role')
    },
    // The options below are bonus ones. Add the options in the first choices
    // {
    //     type: 'list',
    //     message: 'View employees by which department?',
    //     name: 'empByDepartment',
    //     choices: async function departments() {return renderDepartments()},
    //     when: (answers => answers.userChoice == 'View Employees By Department'),
    // },
    // {
    //     type: 'list',
    //     message: "View employees by which manager?",
    //     name: 'empByManager',
    //     choices: async function managers() {return renderManagers()},
    //     when: (answers => answers.userChoice == 'View Employees By Manager')
    // },
    {
        type: 'input',
        name: 'empFirstName',
        message: "What is employee's first name?",
        when: (answers => answers.userChoice == 'Add an Employee'),
    },
    {
        type: 'input',
        name: 'empLastName',
        message: "What is employee's last name?",
        when: (answers => answers.userChoice == 'Add an Employee'),
    },
    {
        type: 'input',
        name: 'empRole',
        message: "What is the new employee's role?",
        when: (answers => answers.userChoice == 'Add an Employee'),
    },
    {
        type: 'input',
        name: 'empRole',
        message: "Who will be the employee's manager?",
        choices: async function roles() {return renderManagers()},
        when: (answers => answers.userChoice == 'Add an Employee'),
    },
    {
        type: 'list',
        name: 'employeeUpdateName',
        message: "Whose role would you like to update?",
        choices: async function employees() {return renderEmployees()},
        when: (answers => answers.userChoice == 'Update An Employee Role'),
    },
    {
        type: 'list',
        name: 'employeeUpdateRole',
        message: "Which role do you like to assign the selected employee?",
        choices: async function roles() {return renderRoles()},
        when: (answers => answers.userChoice == 'Update An Employee Role'),
    },
];

module.exports = questions