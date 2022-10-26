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
                    title: "instructions"
                    } ,
                    {
                    type: "input",
                    message: "Please explain the usage of your project.",
                    title: "usage"
                    } ,
                    {    
                    type: "input",
                    message: "Who worked on this project?",
                    title: "contributions"
                    } ,
                    {
                    type: "input",
                    message: "Please provide test instructions.",
                    title: "testing"
                    } ,
                

                    /*Need to provide options*/
                    {
                    type: "input",
                    message: "Please choose a license for your application.",
                    title: "license"
                    } ,
                    



                    {
                    type: "input",
                    message: "What is your GitHub username?",
                    title: "github"
                    } ,
                    
                    {
                    type: "input",
                    message: "Please enter your email address." 
                    title: "contact"
                    } ] ;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
