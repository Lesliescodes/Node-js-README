//Access to the local file system
const fs = require('fs');
//npm i inquirer to install 
const inquirer = require('inquirer');

const generateMarkdown = require("./generateMarkdown");

const questions = [{
    //   title
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    // need repository or README wont save to anywhere 
    type: 'input',
    name: 'repository',
    message: 'Enter the name of your repository on GitHub?',
  },
  //   Whats the discription?
  {
    type: "input",
    message: "Please provide a breif discription of your project?",
    name: "description",
  },

  {
    //   github
    type: "input",
    name: "GitHub",
    message: "Please enter your GitHub Username?",
  },
  {
    type: "input",
    name: "User",
    message: "How does a user contribute to this project?",
  },
  {
    //   email
    type: "input",
    name: "email",
    message: "Please provide your email address?",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want to use?",
    choices: ["Apache 2.0 Licene", "MIT", "ILP"],
  },
  // dependencies w/ default if nothing selected
  {
    type: "input",
    name: "installation",
    message: "What commands should be run for dependencies? (not required)",
    default: "npm i",
  },
  // test w/ default if nothing selected
  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests? (not required)",
    default: "npm run test",
  },

];

// This was to test the node.js to make sure it was running correctly
// inquirer.prompt(questions).then((data) => {
//   console.log(data);
// });

// TODO: Create a function to write GENERATED-README file
function writeToFile(fileName, data) {
  fs.writeFile("GENERATED-README.md", data, (err) => {
    err
      ?
      console.log(err) :
      console.log("You have made a READMEGEN.md file successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((data) => {
    writeToFile("GENERATED-README.md", generateMarkdown(data));
  });
}

init();
//References
//https://docs.npmjs.com/cli/v8/commands/npm-install