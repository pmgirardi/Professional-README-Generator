//Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {  
  switch (license) {
  case "None":
    return "";
  case "Apache License 2.0":
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  case "GNU General Public License v3.0":
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  case "MIT License":
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  case "Boost Software License 1.0":
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  case "Mozilla Public License 2.0":
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  case "The Unlicense":
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
}
}

//Create a function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "None":
      return "";
    case "Apache License 2.0":
      return "https://choosealicense.com/licenses/apache-2.0/";
    case "GNU General Public License v3.0":
      return "https://choosealicense.com/licenses/gpl-3.0/";
    case "MIT License":
      return "https://choosealicense.com/licenses/mit/";
    case "Boost Software License 1.0":
      return "https://choosealicense.com/licenses/bsl-1.0/";
    case "Mozilla Public License 2.0":
      return "https://choosealicense.com/licenses/mpl-2.0/";
    case "The Unlicense":
      return "https://choosealicense.com/licenses/unlicense/";
  }
}

//Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "None") return "";

  return `## License
  Licensed under the [${license}](${renderLicenseLink(license)})`;
}
//Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  \n[Installation](#installation)
  \n[Usage](#usage)
  \n[Contributing](#contributing)
  \n[Tests](#tests)
  \n[License](#license)
  \n[Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ${renderLicenseSection(data.license)}
  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})\n
  For questions, email me at [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
