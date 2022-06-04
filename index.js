// needed items
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user input
const promptQuestions = [
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github user name?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache 2.0",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla Pub",
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
            name: "install",
            message: "Please provide the installation instructions if needed"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide project usage information"
        },
        {
            type: "input",
            name: "credit",
            message: "Please list others that contributed to this project"
            
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Provide contribution guidelines for this project'

        },
        {
            type: "input",
            name: "tests",
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
];





const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
        }

        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
        ok: true,
        message: 'ReadMe created!'
        })
    })
}

//Function to initialize the generator 
const init = async () => {
    try {
        const data = await inquirer.prompt(promptQuestions);
        writeToFile('./dist/README.md', generateMarkdown(data));
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init()
    
