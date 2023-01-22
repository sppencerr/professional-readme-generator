const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => !!nameInput || 'Please enter your name.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: githubInput => !!githubInput || 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your GitHub repository name (use dash instead of spaces)(Case Sensitive)',
        validate: titleInput => !!titleInput || 'Please enter your GitHub repository.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
        validate: emailInput => !!emailInput || 'Please enter your E-mail.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description',
        validate: descriptionInput => !!descriptionInput || 'Please enter a project description.'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter a Live Link to the project',
        validate: linkInput => !!linkInput || 'Please enter a Live Link to the project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions for the project',
        validate: installInput => !!installInput || 'Please enter installation instructions for the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information for the project',
        validate: usageInput => !!usageInput || 'Please enter usage information for the project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution information for the project',
        validate: contributingInput => !!contributingInput || 'Please enter contribution information for the project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test information for the project',
        validate: testsInput => !!testsInput || 'Please enter test information for the project.'
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to enter some information about the License for a "License" section?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        when: answers => answers.confirmLicense,
        message: 'Select a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'licenseName',
      message: 'Enter the full name of the license you selected:',
      when: answers => answers.confirmLicense && answers.license !== 'None'
  },
  {
      type: 'input',
      name: 'questions',
      message: 'Enter your contact information for questions and support:',
  }
];

inquirer.prompt(questions).then(answers => {
  const markdown = generateMarkdown(answers);
  fs.writeFileSync("./dist/README.md", markdown);
  console.log('README.md generated successfully!');
});
