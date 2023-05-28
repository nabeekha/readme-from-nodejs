// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const license = data.license[0]
  let string = ""
  if (license === "MIT" ) {
    string = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }

  return string
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//https://shields.io/
//https://choosealicense.com/licenses/
//https://img.shields.io/badge/license-MIT-red


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description} 

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseBadge(data)}

## GitHub
${data.github}

## E-mail
${data.email}

`;
//

}

module.exports = generateMarkdown;

//send answers from your index.js to this generateMarkdown function
