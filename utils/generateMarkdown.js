function renderLicenseBadge(data) {
  if (!data.license) {
    return ''
  }
  return `
  [![License](https://img.shields.io/github/license/${data.github}/${data.title})](https://github.com/${data.github}/${data.title}/blob/master/LICENSE)
  `;
}

function renderLicenseLink(data) {
  if (!data.license) {
    return ''
  }
  return `
  - [License](#license)
  `;
}

function renderLicenseSection(data) {
  if (!data.license) {
    return ''
  }
  return `
  ## License
  ${data.license} - [View license](https://github.com/${data.github}/${data.title}/blob/master/LICENSE)
  `;
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Live Link
  [${data.title}](${data.link})

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage) ${renderLicenseLink(data)}
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.useage}
  ${renderLicenseSection(data)}
  ## Contribution
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  You can reach me with my [github profile](https://github.com/${data.github})
  or reach me by [Email](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
