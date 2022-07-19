// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseOptions = [
  'MIT',
  'Apache',
  'Boost',
  'Eclipse',
  'ISC',
]

const licenseBadge = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  Eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
  ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  NoLicense: ''
}

function renderLicenseBadge(license) {
  if (license !== licenseOptions) {
    return `${licenseBadge}`
  } else {
    return ''
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}

  ${responses.badge}

  ##Description

  ${responses.description}

  ##Table of Contents

  - [Description](#description)
  - [Usage Information](#usage-info)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  ##Usage Information

  ${responses.usage}

  ##Contribution Guidelines

  ${responses.contribution}

  ##Test Instructions

  ${responses.test}

  ##License



  ##Questions
  
  github.com/${responses.github}
  ${responses.email}`
}

module.exports = generateMarkdown;
