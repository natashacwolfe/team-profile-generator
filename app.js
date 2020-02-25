const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const managerTemplate = require("./templates/managerTemplate");
const engineerTemplate = require("./templates/engineerTemplate");
const internTemplate = require("./templates/internTemplate");
const indexTemplate = require("./templates/indexTemplate");
const path = require("path");
const fs = require("fs");
const jest = require('jest');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

const employeesArray = [];

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
        name: 'officeNumber',
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

function init() {
    inquirer
        .prompt(prompts)
        .then(empRes => {

            if (empRes.role === 'Manager') {
                inquirer
                    .prompt(managerPrompts)
                    .then(manRes => {
                        let manager = new Manager(empRes.name, empRes.id, empRes.email, empRes.role, manRes.officeNumber);
                        employeesArray.push(manager);
                        console.log("Employee Array", employeesArray)

                        nextEmployee();
                    })
            }
            else if (empRes.role === 'Engineer') {
                inquirer
                    .prompt(engineerPrompts)
                    .then(engRes => {
                        let engineer = new Engineer(empRes.name, empRes.id, empRes.email, empRes.role, engRes.github);

                        employeesArray.push(engineer);
                        console.log("Employee Array", employeesArray)

                        nextEmployee();
                    })
            }
            else if (empRes.role === "Intern") {
                inquirer
                    .prompt(internPrompts)
                    .then(intRes => {
                        let intern = new Intern(empRes.name, empRes.id, empRes.email, empRes.role, intRes.school);

                        employeesArray.push(intern);
                        console.log("Employee Array", employeesArray)

                        nextEmployee();
                    })
            }
        })
        .catch((err) => {
            if (err) console.log(err);
        });
};

function nextEmployee() {
    inquirer
        .prompt([
            {
                "type": "list",
                "message": "Do you want to add another employee?",
                "choices": ["Add employee", 'Exit application'],
                "name": "option"
            }
        ])
        .then(res => {
            switch (res.option) {
                case "Add employee": init()
                    break;
                case "Exit application": renderHtml()
                    process.exit(0)
            }
        })
        .catch((err) => {
            if (err) console.log(err);
        });
};


function renderHtml() {

    let htmlContent = ""
    htmlContent = indexTemplate.renderHeader();
    for (let i = 0; i < employeesArray.length; i++) {
        switch (employeesArray[i].role) {
            case "Manager": let managerObj = {
                name: employeesArray[i].getName(),
                id: employeesArray[i].getId(),
                email: employeesArray[i].getEmail(),
                role: employeesArray[i].getRole(),
                officeNumber: employeesArray[i].getOfficeNumber()
            }
                console.log(managerObj)
                htmlContent += managerTemplate(managerObj);
                break;

            case "Engineer": let engineerObj = {
                name: employeesArray[i].getName(),
                id: employeesArray[i].getId(),
                email: employeesArray[i].getEmail(),
                role: employeesArray[i].getRole(),
                github: employeesArray[i].getGithub()
            }

                htmlContent += engineerTemplate(engineerObj);
                break;

            case "Intern": let internObj = {
                name: employeesArray[i].getName(),
                id: employeesArray[i].getId(),
                email: employeesArray[i].getEmail(),
                role: employeesArray[i].getRole(),
                school: employeesArray[i].getSchool()
            }

                htmlContent += internTemplate(internObj);
                break;
        }
    }
    console.log(htmlContent)
    htmlContent += indexTemplate.renderFooter();

    fs.writeFileSync(outputPath, htmlContent, "utf-8");
    console.log("File updated!", htmlContent);

};

init();