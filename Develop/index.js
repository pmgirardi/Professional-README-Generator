//Include packages needed for this application

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
//Gets absolute path for the generatwMardown file
const generateMarkdownDir = path.resolve(__dirname, "utils");
const generateMarkdownFile = path.join(
  generateMarkdownDir,
  "generateMarkdown.js"
);
const generateMarkdown = require(generateMarkdownFile);

//Create an array of questions for user input
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
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'Enter a list your collaborators:',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for your project:',
        name: 'contributions',
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

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("README generated successfully!");
    });
  }
  
  // function to initialize program
  function init() {
    inquirer.prompt(questions).then((data) => {
      readme = generateMarkdown(data);
  
      writeToFile("README.md", readme);
  
      console.log(data);
      console.log(readme);
    });
  }
  
  // function call to initialize program
  init();
