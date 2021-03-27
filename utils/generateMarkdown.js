

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  let licenseArea = ''
  for (let i = 0; i < licenses.length; i++) {
      switch(licenses[i]) {
          case 'GNU GPLv3':
              licenseArea += '![](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen) '
              break;
          case 'MIT':
              licenseArea += '![](https://img.shields.io/apm/l/vim-mode) '
              break;
          case 'Apache':
              licenseArea += '![](https://img.shields.io/aur/license/android-studio) '
              break;
          case 'ISC':
              licenseArea += '![](https://img.shields.io/badge/license-ISC-brightgreen) '
              break;
          case 'None':
              return ''
              break;
      }
  }
  return licenseArea
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(licenses) {
let licenseText = ''
for (i=0; i<licenses.length;i++){
  if (i === licenses.length -1){
    licenseText += licenses[i];

  }
  else if (i===licenses.length -2) {
    licenseText += licenses[i] + ", and " 
  }
  else {
    licenseText += licenses[i] + ", "

  }
}
return licenseText
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `${renderLicenseBadge(data.licenses)}
# ${data.title}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License(s)
${
!data.licenses ? "No licenses used" : 'This project is covered under the ' + `${renderLicenseLink(data.licenses)} licenses(s).`
}
## Contribution Info
If you want to contribute, contact me thru internet
`;
}

module.exports = generateMarkdown;
