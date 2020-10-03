// setting my variables requiring my other files
const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./utils/generateMarkdown");
// passing the questions for the user 
inquirer.prompt([
    {
        type:"input",
        message:"What is your Github username?",
        name:"Username"
    },
    {
        type:"input",
        message:"What is your email address?",
        name:"Email"
    },

    {
       type:"input",
       message:"What is the title of your project?",
       name:"Title"
    },
    {
        type:"input",
        message:"Please give a description for your project ",
        name:"Description"
    }, 
    {
        type:"input",
        message:"What are the steps required to install your project?",
        name:"Installation"
    }, 
    {
        type:"input",
        message:"Provide instructions and examples for use.",
        name:"Usage"
    }, 
    {
        type:"input",
        message:"Please select a license for your project.",
        choices:[
            "apache",
            "MIT",
            "ISC",
            "GNJ GPLv3"
        ],
        name:"License"
    }, 
    {
        type:"input",
        message:"what command should be run to run tests?",
        name:"Test"
    }, 
    {
        type:"input",
        message:"Who contributed on this project?",
        name:"Contribution"
    }, 
])
.then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
