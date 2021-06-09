const fs = require(`fs`);
const generatePage = require(`./src/page-template`);
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, gitHub] = profileDataArgs;



fs.writeFile('index.html', generatePage(name, gitHub), err => {

    if (err) {
        throw err;
    }
    console.log("portfolio complete");
})