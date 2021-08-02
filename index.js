// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
{   
    type: 'input',
    name: 'title',
    message: 'Please enter a title for your README file:'
},
{
    type: 'input',
    name: 'description',
    message: 'Please enter a description for your README file:'
},
{
    type: 'input',
    name: 'installation',
    message: 'Please enter any installation instructions for your project: '
},
{
    type: 'input',
    name: 'usage',
    message: 'Please enter an explanation for how to use the file: '
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please enter details on how to contribute: '
},
{
    type: 'input',
    name: 'test',
    message: 'Please enter instructions on how to test your project: '
},
{
    type: 'list',
    name: 'license',
    message: 'Please select any licenses used for this project:',
    choices: [
        'Apache License 2.0',
        'BSD 3-Clause',
        'BSD 2-Clause',
        'GNU General Public License',
        'GNU Library',
        'MIT License',
        'Mozilla Public License 2.0',
        'Common Development and Distribution License',
        'Eclipse Public License 2.0'
    ]
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter your github username: '
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address: ',
},
];

const readmeGenerator = (answers) => {
    `# ${answers.title}

    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.installation}
    
    ## Usage Instructions
    ${answers.usage}
    
    ## How to contribute
    ${answers.contribution}
    
    ## Test Instructions
    ${answers.test}
    
    ## License used:
    For this project I used: ${answers.license}
    
    ## Questions
    If you have any questions about the usage of my application, you can contact me here:
    ### Github: ${answers.github}
    ### Email: ${answers.email}`
}

    // const generatedReadme = readmeGenerator(answers);

    // fs.writeFile(filename, JSON.stringify(generatedReadme, null, '\t'), (err) => {
    //    err ? console.log(err) : console.log('Your readme was successfully generated. Enjoy!')
    // })



// TODO: Create a function to write README file
// function writeToFile(filename, data) {
   
 
// }

// TODO: Create a function to initialize app
function init() {
    console.log(`\n
Hi there!
Welcome to my README generator, version 1.0. Answer the below questions to begin
Just remember: if you make a mistake in one of the inputs, you can edit it at the end in your README file.
Lets begin...\n
=====================\n`)
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers)

            const generatedReadme = readmeGenerator(answers);
            
            fs.writeFile('README.md', generatedReadme, (err) => 
                err ? console.log(err) : console.log('Your readme was successfully generated. Enjoy!')
             );
        })
    }



// Function call to initialize app
init();
