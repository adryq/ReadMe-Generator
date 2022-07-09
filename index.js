// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generatorMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"Title",
        message: "What is the title of your project?",
    },
    {
        type:"input",
        name:"Description",
        message: "What is your project about? Provide a short description explaining your project."
    },
    {
        type:"input",
        name:"Table of Contents",
        message:"Include a Table of Contents",
    },
    {
        type:"input",
        name:"Installation",
        message:"What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
        type:"input",
        name:"Usage",
        message:"How is your app used? Provide instructions and examples for use.",
    },
    {
        type:"input",
        name:"Contributions",
        message:"List any collaborators or third party assets used",
    },
    {
        type:"input",
        name:"License",
        message:"What license is being used?",
        choices: ["MIT", "APACHE_2.0", "Boost", "None"]
    },
    {
        type:"input",
        name: "Test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type:"input",
        name:"GitHub",
        message: "Please enter your GithHub username.",
        },
    {
        type:"input",
        name:"Email",
        message: "Please enter your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Successful ReadMe Generated!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("./Example/README.md", generatorMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();