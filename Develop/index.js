// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the steps required to install your project:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter instructions and examples for use. Include screenshots as needed:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter a list your collaborators:',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        choices: [
          'None',
          'Apache License 2.0',
          'GNU General Public License v3.0',
          'MIT License',
          'Boost Software License 1.0',
          'Mozilla Public License 2.0',
          'The Unlicense',
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for your project:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter instructions on how to test your project:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter GitHub Username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter email address:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, markdown.generateMarkdown(data), (err) =>
err ? console.log(err) : console.log('Successfully created a README file!')
);
};

// TODO: Create a function to initialize app
function init() {  
    inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
