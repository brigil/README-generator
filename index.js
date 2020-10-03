// setting my variables requiring my other files
const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./utils/generateMarkdown");
// passing the questions for the user 
inquirer.prompt([
    {
       type:"input",
       message:"What is the title of your project?",
       name:"Title"
    },
    {
        type:"input",
        message:"Give a well-crafted description ",
        name:"Description"
    }, 
    {
        type:"input",
        message:"",
        name:""
    }, 
    {
        type:"input",
        message:"",
        name:""
    }, 
    {
        type:"input",
        message:"",
        name:""
    }, 
    {
        type:"input",
        message:"",
        name:""
    }, 
    {
        type:"input",
        message:"",
        name:""
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
