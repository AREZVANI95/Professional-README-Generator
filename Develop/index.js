// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'Project Title: (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    //Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Project Description: (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },
    // Project Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Steps to installing the project: (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue!');
                return false;
            }
        }
    },
    // Project Usage Information
    {
        type: 'input',
        name: 'HowTo',
        message: 'How do you use this application: (Required)',
        validate: howtoInput => {
            if (howtoInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use this Application!');
                return false;
            }
        }
    },
    // Project Contribution Guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'How Should one contribute to the project: (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    // Project Test Instructions 
    {
        type: 'input',
        name: 'testing',
        message: 'How to test application: (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project!');
                return false;
            }
        }
    },
    // Project License Options
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project: (Required)',
        choices: ['Apache', 'Rails', 'Babel', 'Bash', 'GIMP', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username: (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
        default: false
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
}

// Function call to initialize app
init();