// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [ {
                    type: "input",
                    message: "What is your project's title?", 
                    name: "title"
                    } ,
                    {
                    type: "input",
                    message: "Please provide a description of your project.", 
                    name: "description"
                    } ,
                    {
                    type: "input",
                    message: "What are the instructions to install your project?",
                    name: "instructions"
                    } ,
                    {
                    type: "input",
                    message: "Please explain the usage of your project.",
                    name: "usage"
                    } ,
                    {    
                    type: "input",
                    message: "Who worked on this project?",
                    name: "contributions"
                    } ,
                    {
                    type: "input",
                    message: "Please provide test instructions.",
                    name: "testing"
                    } ,
                

                    /*Need to provide options*/
                    {
                    type: "input",
                    message: "Please choose a license for your application.",
                    name: "license"
                    } ,
                    



                    {
                    type: "input",
                    message: "What is your GitHub username?",
                    name: "github"
                    } ,
                    
                    {
                    type: "input",
                    message: "Please enter your email address.",
                    name: "contact"
                    } ] ;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)
        return answers
    })
    .catch((error)=>{
        console.log(error)
    })
}


// Function call to initialize app
init();
