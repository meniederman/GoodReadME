// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown');

// TODO: Create an array of questions for user input
  const questions = [
    {
      type: 'input',
      message: 'Project Title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter Description:',
      name: 'desc',
    },
    {
      type: 'input',
      message: 'Enter Installation Instructions:',
      name: 'inst',
    },
    {
      type: 'input',
      message: 'Enter Usage Information:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter Test Instruction Information:',
      name: 'test',
    },
    {
    type: 'list',
    message: 'Select Project License',
    name: 'license',
    choices: ['']
  },
  {
    type: 'input',
    message: 'Enter your Github User Name',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email', 
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data){
  fs.writeFile('readMe.md', data,
  (err) =>
  err ? console.log(Bad) : console.log('Success!');
};


// TODO: Create a function to initialize app



// Function call to initialize app
init();
