// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "name",
    message: "WELCOME! This is the README generator! What is the name of your project?",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter your name to credit yourself for your work");
            return false;
        }
    }
},
{
    type: "input",
    name: "github",
    message: "Please enter your GitHub username:",
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log("Please provide your github so that others may find all your work if they wish to do so.");
            return false;
        }
    }
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address:",
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please provide a way for people to contact you if they have any questions.");
            return false;
        }
    }
},
{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log("You must include a title...");
            return false;
        }
    }
},
{
    type: "input",
    name: "description",
    message: "Please enter your project description here:",
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log("Please provide a description for your project.");
            return false;
        }
    }
},
{
    type: "input",
    name: "installation",
    message: "What are the steps of installation?",
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log("Please provide instructions for installation this will allow users to have the correct programs needed.");
            return false;
        }
    }
},
{
    type: "input",
    name: "usage",
    message: "Instructions for usage:",
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log("Pleaes provide instructions for usage, this will allow users to navigate your program better.");
            return false;
        }
    }
},
{
    type: "input",
    name: "contributing",
    message: "How can other people contribute to this project?",
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log("Please provide steps on how others can contribute to your project.");
            return false;
        }
    }
},
{
    type: "input",
    name: "tests",
    message: "Describe the tests written for your application and how to use them:",
    validate: testsInput => {
        if (testsInput) {
            return true;
        } else {
            console.log("Please provide tests used to contribute to your project.");
            return false;
        }
    }
},
{
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license?",
    default: false
},
{
    type: "list",
    name: "licenses",
    message: "What license would you like to include?",
    choices: ["MIT", "GPL", "CC--0"],
    when: ({ confirmLicenses }) => {
        if (confirmLicenses) {
            return true;
        } else {
            return false;
        }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(data), 
        err ? console.log(err) : console.log("README.md created!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data.license);
    })
}

// Function call to initialize app
init();
