const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require('jest');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// const render = require("./lib/htmlRenderer");

// let prompts = new Employee [
let prompts = [
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

let managerPrompts = [
    {
        type: 'input',
        message: `What is the manager's office number`,
        name: 'office',
    }
];

let engineerPrompts = [
    {
        type: 'input',
        message: `What is the engineer's GitHub username?`,
        name: 'github',
    }
];

let internPrompts = [
    {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'school',
    }
];


inquirer
  .prompt(prompts)
  .then(res => {
      console.log(res)
        return new Employee(employeeInfo)
      //send to employee.js

      if (res.role === 'Manager') {
          inquirer
          .prompt(managerPrompts)
          .then (res => {
              console.log(res)
              //send to manager.js
          }) 
      } 
      else if (res.role === 'Engineer') {
          inquirer
          .prompt(engineerPrompts)
          .then(res => {
              console.log(res.github);
          })
      }
      else if (res.role === "Intern") {
          inquirer
          .prompt(internPrompts)
          .then(res => {
              console.log(res.school)
          })
      }
    }); 