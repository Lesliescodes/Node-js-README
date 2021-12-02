// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === "Apache 2.0") {
    return `## Licence
  [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === "IBM-IPL 1.0") {
    return `## Licence
  [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //creating my markdown with template strings
  if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ${renderLicenseBadge(data.license)}
 
  ## Description
  ${data.description}
  
  ## Table of Contents
  -[ Title](#title)
  -[ Description](#description)
  -[ Installation](#installation)
  -[ Usage](#usage)
  -[ License](#license)
  -[ Contributing](#contributing)
  -[ Tests](#tests)
  -[ Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.test}
  ## Questions
  github.com/${data.GitHub}
  ${data.Email}
  
`;
}


module.exports = generateMarkdown;
