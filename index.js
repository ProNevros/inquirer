// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'What does the project do?',
    name: 'description',
},
{
    type: 'input',
    message: 'How do you install it?',
    name: 'installation',
},

{
    type: 'input',
    message: 'How do you use this?',
    name: 'usageInfo',
},
{
    type: 'input',
    message: 'Where can others go to contribute to this project?',
    name: 'guidelines',
},

{
    type: 'list',
    message: 'Which license did you use?',
    choices: ['MIT', 'ISC', 'University of Illinois/NCSA Open Source License', 'Do What The F*ck You Want To Public License'],
    name: 'license',
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'userName',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
}];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("newREADME.md", data, (err) => err ? console.log(err) : console.log("Generating README..."))
};
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => writeToFile(generateMarkdown(answers)));
}

// Function call to initialize app
init();