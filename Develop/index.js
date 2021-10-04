// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// this requires the generateMarkdonw in file
const generateMarkdown = require('./utils/generateMarkdown.js')
// this requires/calls file system
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Please provide the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a description of your project?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide required installations for this application?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide the usage instructions?',
    },
    {
        type: 'list',
        name: 'License',
        choices: ['Apache License 2.0', ' MIT License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
        message: 'Select the type of licese.',
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Please provide the application contributing members.'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Please provide testing instructions for this application.'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Please provide your email for inquiries regarding your application.',
    }
];

// function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    // initiates questions object prompt
    inquirer.prompt(questions)
        // writes file to READMEGENERATED.md using data from generateMarkdown
        .then((data) => writeToFile('READMEGENERATED.md', generateMarkdown(data)))
        // once printed w/o erros succesful comand  is printed
        .then(() => console.log("README successfully written."))
        // this will print any erros in the command line, if any.
        .catch((err) => console.log(err))
}

// function call to initialize program
init();
