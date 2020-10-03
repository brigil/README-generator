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
        type: "input",
        message: "Enter Table of Contents",
        name: "Contents"
    },
    {
        type:"input",
        message:"What are the steps required to install your project?",
        name:"Installation",
        default: "npm i"
    }, 
    {
        type:"input",
        message:"Provide instructions and examples for use.",
        name:"Usage"
    }, 
    {
        type:"input",
        message:"List your collaborators, with links to their GitHub profiles.",
        name:"Credits"
    }, 
    {
        type:"checkbox",
        message:"Please select a license for your project.",
        choices:[
            "Apache",
            "MIT",
            "ISC",
            "GNJ GPLv3"
        ],
        name:"License"
    }, 
    {
        type:"input",
        message:"what command should be run to run tests?",
        name:"Test",
        default: "npm test"
    }   
])

.then(function (answers) {

    let licenseKind;
// license badges
        if (answers.license === "GNU GPLv3") {
            licenseKind = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        }
        if (answers.license === "MIT") {
            licenseKind = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        }
        if (answers.license === "Apache") {
            licenseKind = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }  
        if (answers.license === "ISC") {
            licenseKind = "[![License](https://img.shields.io/badge/License-ISC%202.0-yellow.svg)](https://opensource.org/licenses/ISC-2.0)"
    
        }
// create new readme name readme2
    let File = "README2.md"; 

    fs.writeFile(File, generateMd(answers, licenseKind), function(err){
        if (err) {
            return console.log(err)
        }
        // console.log("it works!")
    })
    });

