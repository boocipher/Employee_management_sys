# Employee_management_sys


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
