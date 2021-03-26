// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {type: 'input', message: "What is your name?", name: 'inputName'},
    {type: 'input', message: "What is your GitHub URL?", name: 'github_url'},
    {type: 'input', message: "What is your LinkedIn URL?", name: 'linkedin_url'},
    {type: 'input', message: "Where are you located?", name: 'location'},
    {type: 'input', message: "What are your favorite colors?", name: 'faveColors'},
    {type: 'input', message: "What are your favorite foods?", name: 'faveFoods'},
    {type: 'input', message: "What is your one-sentence bio?", name: 'bio'},
  ])
  .then(answers => {
    const basehtml = createHTML(answers);
    fs.writeFile('./index.html', basehtml, (error) => { if (error) console.log("This didn't work.")});
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });
const createHTML = ({inputName, github_url, linkedin_url, location, faveFoods, faveColors, bio}) =>
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <!--NORMALIZE CSS-->
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <!--BOOTSTRAP 5-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <!--GOOGLE FONTS - CHANGE TO YOUR FONT STACK-->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
        <!--CUSTOM STYLES-->
        <link rel="stylesheet" href="./style.css" />
        <title>Page Title Here</title>
    </head>
    <body>
        <nav>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact Me</a>
                </li>
            </ul>
        </nav>
        <div class="container">
            <div class="row justify-content-center">
                <div id="portfolio" class="col-8">
                    <h1 id="name" class="display-4">${inputName}</h1>
                    <p class="lead">This is a simple portfolio page for ${inputName} using Node.js for input.</p>
                    <h3>Links</h3>
                    <ul>
                    <li><a id="github-url" href="${github_url}">${github_url}</a></li>
                    <li><a id="linkedin-url" href="${linkedin_url}">${linkedin_url}</a></li>
                    </ul>
                    <h3>About Me</h3>
                    <p>Location: <span id="location">${location}</span></p><br>
                    <p>Favorite Colors: <span id="faveColors">${faveColors}</span></p>
                    <p>Favorite Foods: <span id="faveFoods">${faveFoods}</span></p><br>
                    <p>Short Bio:<br><span id="bio">${bio}</span></p>
                </div>
            </div>
        </div>
        <!--JQUERY & POPPER-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <!--BOOTSTRAP 5-->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
            integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
            crossorigin="anonymous"></script>
        <!--MOMENT DAY/TIME JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <!--CUSTOM SCRIPTS-->
        <script src="./script.js"></script>
    </body>
    </html>
    `;
//     # <Your-Project-Title>
// ## Description
// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?
// ## Table of Contents (Optional)
// If your README is long, add a table of contents to make it easy for users to find what they need.
// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)
// ## Installation
// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
// ## Usage
// Provide instructions and examples for use. Include screenshots as needed.
// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```
// ## Credits
// List your collaborators, if any, with links to their GitHub profiles.
// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
// If you followed tutorials, include links to those here as well.
// ## License
// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
// ---
// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
// ## Badges
// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
// ## Features
// If your project has a lot of features, list them here.
// ## How to Contribute
// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
// ## Tests
// Go the extra mile and write tests for your application. Then provide examples on how to run them here.