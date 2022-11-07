// Packages needed for this application
const inquirer = require("inquirer");
const MarkDown = require("./lib/ReadmeGen");
const fs = require("fs");

// Array of questions for user input
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
// Prompts question then generates ReadMe file
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function(err){
            if(err){
                console.log('Could not save file')
            } else {
                console.log('Success, your ReadMe file has been generated inside the current folder')
            }
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}


// Function call to initialize app
init();
