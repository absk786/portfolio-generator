const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

inquirer 
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name',

        }

    ])
    .then (answers => console.log(answers));

// const pageHTML = generatePage(name,gitHub);


// fs.writeFile('index.html', generatePage(name, gitHub), err => {

//     if (err) {
//         throw err;
//     }
//     console.log("portfolio complete");
// })