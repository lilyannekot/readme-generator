// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('/Users/lilykot/Desktop/readme-generator/utils/generateMarkdown.js');

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
        name: 'usage',
        message: 'What usage information would you like to include?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What would you like to include in your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are your test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use?',
        choices: ['MIT', 'Apache', 'Boost', 'Eclipse', 'ISC', 'No License']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err): console.log('Your README is ready!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);

        writeToFile(`READMEFile.md`, generateMarkdown(responses));
    });
}

// Function call to initialize app
init();

