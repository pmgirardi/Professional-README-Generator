//Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
 }

// Create a function that returns the license link
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`
  }
  return '';
 }

// Create a function that returns the license section of README
function renderLicenseSection(license) { 
  if (license !== 'None') {
    return `## License\nThis project is licensed under the ${license} license`
  }
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation-instructions)
  
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributions](#contributions)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  ## Installation Instructions
  ${data.intallation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions you can email me at: ${data.email} \n
  You can find more of my work at: [${data.github}](https://github.com/${data.github}) 
`;
}

module.exports = generateMarkdown;
