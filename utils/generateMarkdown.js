// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseOptions = {
  MIT: 'MIT',
  Apache: 'Apache',
  Boost: 'Boost',
  Eclipse: 'Eclipse',
  ISC: 'ISC'
};

const licenseBadge = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  Eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
  ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
};

function renderLicenseBadge(license) {
  if (license in licenseOptions === true) {
    console.log(license);
    return licenseBadge[license]
  } else {
    return ''
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLink = {
  MIT: 'https://opensource.org/licenses/MIT',
  Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
  Eclipse: 'https://opensource.org/licenses/EPL-2.0',
  ISC: 'https://opensource.org/licenses/ISC'
};

function renderLicenseLink(license) {
  if (license in licenseOptions === true) {
    return licenseLink[license]
  } else {
    return ''
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license in licenseOptions === true) {
    return 'This application is covered under the following license: ' + `${license}`
  } else {
    return ''
  };
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}

  ${renderLicenseBadge(responses.license)}

  ## Description

  ${responses.description}

  ## Table of Contents

  * [Description](#description)
  * [Usage Information](#usage-information)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [License](#license)
  * [Questions](#questions)

  ## Usage Information

  ${responses.usage}

  ## Contribution Guidelines

  ${responses.contribution}

  ## Test Instructions

  ${responses.test}

  ## License

  ${renderLicenseSection(responses.license)}\n
  ${renderLicenseLink(responses.license)}

  ## Questions
  
  github.com/${responses.github}\n
  ${responses.email}`
}

module.exports = generateMarkdown;
