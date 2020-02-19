// inquirer, jest, fs, html-pdf

const fs = require('fs');
const inquirer = require('fs');
const jest = require('jest');
const htmlPdf = reuire('html-pdf');

// prompt user 

const questions = [
    { 
        type: 'list',
        message: 'What type of employee do you want to add?',
        choices: ['manager', 'engineer', 'intern']
    }
];

