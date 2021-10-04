// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(licenseChoice) {

    if (licenseChoice == 'Apache License 2.0') {
      return `
  ![apache](https://img.shields.io/badge/license-Apache%20License%202.0-blue)
      `;
    } else if (licenseChoice == 'GNU GPLv3') {
      return `
  ![gnu](https://img.shields.io/badge/license-GNU%20GPLv3-green)
      `;
    } else if (licenseChoice == 'ISC License') {
      return `
  ![isc](https://img.shields.io/badge/license-ISC%20License-purple)
      `;
    } else {
      return `
  ![mit](https://img.shields.io/badge/license-MIT%20License-red)
      `;
    }

}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(licenseChoice) {

  if (licenseChoice == 'Apache License 2.0') {

    return `(This application is covered by the Apache v2.0 License, the terms of which can be found [here](https://www.apache.org/licenses/LICENSE-2.0.txt)).`;

  } else if (licenseChoice == 'GNU GPLv3') {

    return `
    This application is covered by the GNU General Purpose License, the terms of which can be found [here](https://www.gnu.org/licenses/gpl-3.0.en.html).
    `;

  } else if (licenseChoice == 'ISC License') {

    return `
    This application is covered by the ISC License, the terms of which can be found [here](https://opensource.org/licenses/ISC).
    `;

  } else {

    return `
    This application is covered by the MIT License, the terms of which can be found [here](https://opensource.org/licenses/MIT).
    `;

  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

  
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.Description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation Instructions 
  ${data.Installation}
  ## Usage Instructions
  ${data.Usage}
  ## License
  ${renderLicenseLink(data.license)}
  ## Contributing Members
  ${data.Contributors}
  ## Testing 
   ${data.Test}
  ## Questions/Inquiries 
  ### GitHub Profile
  [GitHub Profile](http://github.com/${data.Github})
  ### Email
  ${data.Email}
`;
}
module.exports = generateMarkdown;