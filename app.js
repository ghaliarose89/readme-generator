const inquirer = require("inquirer");
const fs = require('fs');
const generatePage = require ('./utils/tamplete');
const questions =

  [

    {
      type: 'input',
      name: 'githubUser',
      message: 'Please enter your Github user name (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your Github name');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is your Email address (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your Project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is your project name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your Project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'discription',
      message: 'Please enter a discription of your project (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter a discription!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
     
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use',

    },
    {
      type: 'list',
      name: 'license',
      message: 'Select your licence (you can selsect by pressing Enter key from your keyboard)',
      choices: ['MIT', 'GNU', 'Mozilla', 'Apache', 'IBM'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Add guidelines for  developers to contribute the project',

    },
    {
      type: 'input',
      name: 'test',
      message: 'Write tests for your application and provide examples on how to run them.',

    },

  ];



const init = () => {
  inquirer.prompt(questions)
    .then(answers => {
      console.log(answers);
      fs.writeFile('./READMEExample.md', generatePage(answers), err => {
        if (err)
          console.log(err);
        else
          console.log("Your README file has been created, Please preview it in the main directory")
      })
    })
  
};

init();