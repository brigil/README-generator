// function to generate markdown for README
function generateMd(answers) {
  return `
  
  # ${answers.Title}

  ## Description 
  ${answers.Description}


### Installation
${answers.Installation}


### Usage 
${answers.Usage}


### Credits
${answers.Credits}



${answers.Username}
${answers.Email}

### License
${answers.License}


### Tests

${answers.Test}


© 2020 brigil Inc. All Rights Reserved.



`;
}

module.exports = generateMd;
