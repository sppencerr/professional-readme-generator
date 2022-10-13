const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (!license) {
    return ``;
  }
  else {
    return `[![${license} license](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://lbesson.mit-license.org/`
  }
  if (license === "GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }
  if (license === "CC--0") {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
};



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenses)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)



  ## Description <a name="description"></a>
  ${data.description}
## Installation <a name="installation"></a>
${data.installation}
## Usage <a name="usage"></a>
${data.usage}
## Licenses <a name="licenses"></a>
  ${renderLicenseSection(data.licenses)}
## Contributing <a name="contributing"></a>
${data.contributing}
## Tests <a name="tests"></a>
${data.tests}
## Questions <a name="questions"></a>
Any questions about the project?
Github: https://github.com/${data.github}
Email: ${data.email}
## Credits <a name="credits"></a>
${data.name}

`;
}

module.exports = generateMarkdown;
