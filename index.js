const fs = require("fs");
const axios = require("axios");
const questions = require("inquirer");

questions.prompt([
    {
        message: "Provide GitHub username:",
        name: "userNane"
    },
    {
        type: "input",
        message: "Provide title for your project:",
        name: "projecTitle"
    },
    {
        type: "input",
        message: "Provide some description:",
        name: "description"
    },
    {
        type: "input",
        message: "Provide table of contents:",
        name: "contents"
    },
    {
        type: "input",
        message: "Provide installation instructions:",
        name: "instructions"
    },
    {
        type: "input",
        message: "How is the project used?",
        name: "usage"
    }, 
    {
        type: "input",
        message: "License:",
        name: "license"
    }, 
    {
        type: "input",
        message: "Any contributors to this project? (Name them)",
        name: "contributors"
    }, 
    {
        type: "input",
        message: "Tests:",
        name: "tests"
    }
]).then(function ({
    userNane,
    projecTitle,
    description,
    contents,
    instructions,
    usage,
    license,
    contributors,
    tests
}) {
    const queryUrl = `https://api.github.com/users/${userNane}`;

    axios.get(queryUrl).then(function (res) {
        console.log(res.data.html_url);
        //console.log(res);

        readme = `# projecTitle: ${projecTitle} \n## Description: \n${description} \n## Table of Contents: \n${contents} \n## Instructions: \n${instructions} \n## Usage: \n${usage} \n## License: \n${license} \n## contributors: \n${contributors} \n## Tests: \n${tests}`;

        fs.writeFile("README.md", readme, function (err) {
            if (err) 
                throw err;
            
        })
    });
});

