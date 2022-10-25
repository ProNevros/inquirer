// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(answers.license) {
    case "MIT":
      response = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      return response;
      
    case "APACHE 2.0":
      response = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      return response;
      
    case "BSD 3":
      response = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      return response;
      
    case "GPL 3.0":
      response
      = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      return response;
      
    case "none":
      response = ""
      return response;
      
   };
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (answers.license === "none") {
  response = ""
  return response;
} else {
  return `- [License](#license)`;
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if (answers.license === "none") {
  response = ""
  return response;
  } else {
    return `## License:
    This project is licensed under the ${answers.license} license.
  `;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description

  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${installattion}
  
  ## Usage
  
  ${usageInfo}
  
  --add video here--
  
  ## License
  
  ${license}
  
  ---
  
  ## How to Contribute
  
  ${guidelines}
  
  ## My Information
  
  I can be contacted here:
  
  ${userName}
  
  ${email}`;
}

module.exports = generateMarkdown;