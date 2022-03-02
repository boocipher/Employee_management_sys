const inquirer = require('inquirer');
const cTable = require('console.table');
const Queries = require('./lib/queries');
const Questions = require('./lib/questions');

// new object of class Queries
const queries = new Queries();

const q = new Questions(queries);


function init() {
    q.questions();
};

init();

