// needed items
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your github user name?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "description",
            message: "Please include a description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide the installation instructions if needed"
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide the project usage"
        },
        {
            type: "input",
            name: "licence",
            message: "Please provide the project licence or your badge link"
        },
        {
            type: "input",
            name: "contributing",
            message: "Please provide who contributed to this project"
        },
        {
            type: "input",
            name: "test",
            message: "Please provide the project tests"
        },
        {
            type: "input",
            name: "repo",
            message: "What is your repo link?"
        },
        {
            type: 'input',
            name: 'email',
            message: `What's your email address?`,
            validate: function (value) {
                let pass = value.match(
                    /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                );
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email address!';
            },
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, (err)=>
    err ? console.log(err) : console.log(success)
    );
}

// TODO: Create a function to initialize app
function init() {
    const data = inquirer.prompt(questions);
    writeToFile('./dist/README.md', generateMarkdown(data));
}

// Function call to initialize app
init();
