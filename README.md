# Employee_management_sys

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

    * Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

    * Uses the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

* Follows the table schema outlined in the homework instructions.


### Bonus

Fulfilling any of the following can add up to 20 points to your grade. Note that the highest grade you can achieve is still 100:

* Application allows users to update employee managers (2 points).

* Application allows users to view employees by manager (2 points).

* Application allows users to view employees by department (2 points).

* Application allows users to delete departments, roles, and employees (2 points for each).

* Application allows users to view the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department (8 points).
=======
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Description
**Employee_management_sys** is a backend only command-line application (CLA) that demonstrates some of the basic capabilities of an EMS (Employee management system). The user can view information about the employees, managers and departments within a company, as well as add new employees and create more roles. <br>
An Employee management system provides managers and HR departments with insights into their workforce, and helps them to better plan and manage work hours to easily control labor costs and increase productivity.

## Installation
In order to run **Employee_management_sys** you must have **NodeJS** installed.
You can download it from [here](https://nodejs.org/en/download/)<br>
<br>
<br>
Next, you need to install the required packages <br> 

1. Enter this command for installing the Inquirer package

    ```
    npm i inquirer
    ```

2. Next, enter this command for MySQL2 package

   ```
   npm i mysql2
   ``` 
 
3. And follow by entering this command for the console-table package <br>   
   ```
   npm i console.table
   ```


## Usage
This application contains a local database so in order to seed it, first you'll need to create the schema by logging into the MySQL shell. For that purpose, enter the following command in your terminal or command prompt <br>
```mysql -u root -p``` <br>
<br>
Then you'll be prompted for your password and upon successful provision, you'll see the mysql prompt. Create the schema by typing <br>
```SOURCE db/schema.sql``` <br>
<br>
Type in EXIT or QUIT once the schema is created.
<br>
<br>
Next, you need to seed the database by running the command <br>
```npm run seed```
<br>
<br>
Finally, to invoke the application run <br>
```node index.js```
<br>
<br>
For further help on how to set up and run the application, you can also refer to the walkthrough video [here](https://drive.google.com/file/d/1Nm_7dt990-qWQ8R7IFH8eWxFNQHAGQvo/view?usp=sharing).<br>
<br>


## Contributing
Please follow these guidelines if you want to contribute to this project: <br>
You can add issues or recommendations via the app GitHub Issues tab.
If you want to have your fix or feature added, you'll hoave to create and submit a PR for review.

## License
This project is licensed under the MIT license.

## Questions
Any questions? You can reach me at
GitHub: [boocipher](https://github.com/boocipher)<br>
Email: boocipher@gmail.com
