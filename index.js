// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your project",
        
    },
    {
        type:"input",
        name:"discription",
        message:"Privide discription of your project",
        
    },
    {
        type:"input",
        name:"Installation",
        message:"What command needs to be intered?",
        default:"npm i",
        
    },
    {
        type:"input",
        name:"usage",
        message:"What is the use of this project?",
        
    },
    {
        type:"input",
        name:"contribution",
        message:"Provide info regard contribution.",
        
    },
    {
        type:"input",
        name:"test",
        message:"What command need to run the test?",
        default:"npm test"
        
    },
    {
        type:"list",
        name:"license",
        message:"What is the use of this project?",
        choices:["MIT","UNlicence","BSD","APACHE"],
        
    },
    {
        type:"input",
        name:"github",
        message:"What is your github username?",
        
    },
    {
        type:"input",
        name:"email",
        message:"What is your email?",
        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse)=>{
        writeToFile("README.md",generateMarkdown({...inquirerResponse}))
    })
}

// Function call to initialize app
init();
