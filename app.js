const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require('jest');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");


​let prompts = new Employee [
    {
        type: 'input',
        message: 'What is the employee name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What role does this employee have?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    }
];
​
let managerQuestions = new Manager [
    {
        type: 'input',
        message: `What is the manager's office number`,
        name: 'office',
    }
];

let engineerQuestions = new Engineer [ 
    {
        type: 'input',
        message: `What is the engineer's GitHub username?`,
        name: 'github',
    }
];

let internQuestions = new Intern [
    {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'school',
    }
];


inquirer
  .prompt(prompts)
  .then(res => {
      if ( res.role == "manager" ) {
          inquirer
            .prompt(managerQuestions)
      } 
      else if ( res.role == "engineer" ) {
          inquirer
          .promt(engineerQuestions)
      }
      else if ( res.role == "intern" ) {
        inquirer
        .prompt(internQuestions)
      }
  }) 