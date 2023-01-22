import inquirer from 'inquirer';
import fs from 'fs';
import util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);

const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'author',
      message: 'What is the name of the author?'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license will your project need (if any)?',
      choices: [
        'Apache 2.0',
        'MIT',
        'Open Software License 3.0',
        'Educational Community License v2.0',
        'None'
      ]
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the instructions for installation?'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Users are free to contribute to this application.'
    }
  ]);
  
  return answers;
};

const generateMD = (data) => {
  return `
${data.title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
...
`;
};

questions()
  .then((answers) => {
    const readme = generateMD(answers);
    return writeFileAsync('README.md', readme);
  })
  .catch((err) => {
    console.log(err);
  });
