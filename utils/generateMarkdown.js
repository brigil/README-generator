// function to generate markdown for README
function generateMd(answers, licenseKind) {
  return `

  # ${answers.Title}

  ## Description 
  ${answers.Description}

  ### Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


### Installation
${answers.Installation}


### Usage 
${answers.Usage}


### Credits
${answers.Credits}






### License
${answers.License}

${licenseKind}


### Tests

${answers.Test}


Email : 
${answers.Email}
Github : https://github.com/${answers.Username}

© 2020 brigil Inc. All Rights Reserved.



`;
}

module.exports = generateMd;
