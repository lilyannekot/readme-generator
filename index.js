// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = require('generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does your project do?',
    },
    {
        type: 'input',
        name: 'usage-info',
        message: 'What usage information would you like to include?',
    },
    {
        type: 'input',
        name: 'contribution-guidelines',
        message: 'What would you like to include in your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test-instructions',
        message: 'What are your test instructions?',
    },
];

function runQuestions() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
    });
    // writeToFile('index.html', generateMarkdown(response));
}

// TODO: Create a function to write README file
function writeToFile(filename, data) {

    fs.writeFile('README.md', data, (err) => 
    err ? console.error(err): console.log('Your README is ready!')
    );
}

runQuestions()
    .then(response => {
        return generateReadme(response);
    })
    .then(data => {
        return writeToFile(data);
    })
    .catch(err => {
        console.log(err)
    })
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

