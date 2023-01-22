import fs from 'fs';

const renderLicenseBadge = (license) => {
  if (!license) return '';
  return `[![${license} license](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
};

const renderLicenseSection = (license) => {
  if (!license) return '';
  return `## Licenses
  This project is covered under the ${license} license. To learn more about what this means, click the license badge above.`;
};

const generateMarkdown = (data) => {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
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
  ${renderLicenseSection(data.license)}
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
};

export default generateMarkdown;
