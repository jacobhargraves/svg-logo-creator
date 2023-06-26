// Runs the application using imports from lib/

// Adding packages as variables
import inquirer from 'inquirer';
import fs from 'fs';
import shapeFile from './lib/shapes.js';

const userInputQuestions = [ 
    {
        type: 'checkbox',
        message: 'What kind of shape do you want to create?',
        name: 'shape',
        choices: ['Circle', 'Rectangle', 'Triangle']
    },       
    {
        type: 'input',
        message: 'Please type the color you wish the shape to be either as a keyword or hexadecimal',
        name: 'shapeColor',
    },
    {
        type: 'input',
        message: 'Enter text up to 3 characters',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Please type the color you wish the text to be either as a keyword or hexadecimal',
        name: 'textColor',
    },
];

// gets user input to create svg
function userInput() {
    inquirer
    .prompt(userInputQuestions)
    .then((answers) => {
        // console.log(answers);
        if (answers.shape.includes('Circle')){
            let newShape = new shapeFile.Circle(
                answers.text,
                answers.textColor,
                answers.shapeColor
            )
            console.log(newShape.render());
        } else if (answers.shape.includes('Rectangle')) {
            let newShape = new shapeFile.Rectangle(
                answers.text,
                answers.textColor,
                answers.shapeColor
            )
            console.log(newShape.render());
        } else if (answers.shape.includes('Triangle')) {
            let newShape = new shapeFile.Triangle(
                answers.text,
                answers.textColor,
                answers.shapeColor
            )
            console.log(newShape.render);
        }
        // writeToFile('logo.svg', answers);
    })
    .catch((error) => {
    if (error.isTtyError) {
        console.log(error);
    } 
    });
}

// creates svg file using the answers from userInput()
function writeToFile(fileName, data) {
    //const markdownContent = generateMarkdown(data)
    fs.writeFile(fileName, markdownContent, (err) => err ? console.error(err) : console.log("Generated logo.svg"));
}

function init() {
    userInput();
}

init();