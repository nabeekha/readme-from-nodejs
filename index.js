// TODO: Include packages needed for this application
const inquirer = require('inquirer')

//importing function from generate markdown
const genMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project'
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Please enter your GitHub repository link'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the application'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions to use your application'
    },
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Please check the additional boxes where you would like to enter information',
        choices: [
            {
                name: 'Deployed Application',
                checked: false
            },
            {
                name: 'Installation',
                checked: false
            },
            {
                name: 'Screenshots',
                checked: true
            },
            {
                name: 'Built With',
                checked: true
            },
            {
                name: 'License',
                checked: false
            },
            {
                name: 'Contributing',
                checked: false
            },
            {
                name: 'Tests',
                checked: false
            },
            {
                name: 'Questions',
                checked: true
            },
            {
                name: 'Credits',
                checked: true
            },
        ]
    }
];

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
    })
    .then(newReadme => writeToFile('README.md', newReadme))
    .catch(err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
