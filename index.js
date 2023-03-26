// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project'
    },
    //add additional questions in the format above as objects
];

//importing function from generate markdown
const genMarkdown = require('./utils/generateMarkdown')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    //console.log("test")

    //inquirer questions using prompt
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers.title)
        //creating a variable to call the generate markdown function
        var testMarkdown = genMarkdown(answers)
        console.log(testMarkdown)
    }
    )
}

// Function call to initialize app
init();
