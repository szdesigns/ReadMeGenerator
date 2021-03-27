const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Include packages needed for this application
const generateMarkdown = require ("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {type: 'input', message: "What is your title of your project?", name: 'title'},
    {type: 'input', message: "What would you like to name your Readme file?",  name: 'filename'},
    {type: 'input', message: "What is your description? A couple of sentences will do.", name: 'description'},
    {type: 'input', message: "What is your installation details for you project?", name: 'installation'},
    {type: 'input', message: "What are your usage details?", name: 'usage'},
    {type: 'input', message: "Who would you like to credit?", name: 'credits'},
    {type: 'checkbox', message: "What are the license(s) that you used?", name: 'licenses', choices : ["MIT", "GNU GPLv3", "Apache", "ISC", "None"]},
  ])
  .then(answers => {
    const README = generateMarkdown(answers);
    fs.writeFile(answers.filename +'.md', README, (error) => { if (error) console.log("This didn't work.")});
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });
}

// Function call to initialize app
init();



