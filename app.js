const inquirer = require("inquirer");

const userPrompt = userinfo => {

  if (!userinfo.answers) {
    userinfo.answers = [];
  }
  return inquirer.prompt([

    {
      type: 'input',
      name: 'github-user',
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
      name: 'project-title',
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
      //when: ({ confirmAbout }) => confirmAbout
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use',

    },
    {
      type: 'list',
      name: 'license',
      message: 'Select your licence (you can selsect by pressing space key from your keyboard)',
      choices: ['MIT', 'GNU', 'Mozilla', 'Apache', 'Unlicense'],
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


  ])
    .then(userinfo1 => {
      userinfo.answers.push(userinfo1)
      console.log(answers);
    }
    );

};
userPrompt();