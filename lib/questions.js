const inquirer = require('inquirer');

// 
class Questions {
    constructor(queries) {
        this.queries = queries;
    }

    getQuestions() {
        return [
            {
                type: 'list',
                name: 'firstChoice',
                message: 'Welcome to Company EMS! What do you want to do next?',
                choices: ['View all Departments', 'Add a Department', 'View all Roles', 'Add a Role', 'View all Employees', 'Add an Employee', 'Update Employee Role']
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
                name: 'empManager',
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
    }

    questions() {
        inquirer.prompt(this.getQuestions())
        .then(answers => {
            this.processAnswers(answers);
            // console.log();
        })
    }

    processAnswers(answers) {
        const { 
            firstChoice, 
            departmentName, 
            roleTitle, 
            roleSalary, 
            roleDepartment, 
            empFirstName, 
            empLastName, 
            empRole, 
            empManager, 
            employeeUpdateName, 
            employeeUpdateRole
        } = answers;

        console.log('These are the asnwers: ', answers);
        
        // view all departments,
        if (firstChoice === 'View all Departments') {
            this.queries.renderDepartments()
                .then(departments => {
                    console.table(departments);

                    this.questions();
                });
        } else if (firstChoice === 'Add a Department') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'deptName',
                    message: 'what is the name of the department ?'
                }
            ]).then(answers => {
                this.queries.addDepartment(answers.deptName)
                .then(() => {
                    this.questions();
                })
                .catch(console.log);
            })
                
        } else if (firstChoice === 'View all Roles') {
            this.queries.renderRoles()
            .then(([rows,fields]) => {
                console.table(rows);

                this.questions();
            });
        } else if (firstChoice === 'Add a Role') {
            inquirer.prompt([{
                type: 'input',
                name: 'roleTitle',
                message: 'What is the title of the new role?'
            },
            {
                type: 'input',
                name: 'roleSalary',
                message: 'What is the salary for the new role?'
            },
            {
                type: 'list',
                name: 'roleDepartment',
                message: 'What is the department of the new role?',
                choices: async () => {
                    return this.queries.renderDepartments()
                        .then(rows => {
                            return rows.map(({ id, name }) => ({
                                name,
                                value: id
                            }));
                        });
                }
            }])
            .then(answers => {
                this.queries.addRole(answers.roleTitle, answers.roleSalary, answers.roleDepartment)
                .then(() => {
                    this.questions();
                });
            });
        } else if (firstChoice === 'View all Employees') {
            this.queries.renderEmployees()
            .then(([rows,fields]) => {
                console.table(rows);

                this.questions();
            });
        }
    }
    
};

module.exports = Questions;