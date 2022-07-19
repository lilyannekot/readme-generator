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
};

function renderLicenseBadge(licenseBadge) {
  if (`${response.license}` === licenseOptions) {
    return (licenseBadge)
  } else {
    return ''
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLink = {
  MIT: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices.',
  Apache: 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. ',
  Eclipse: 'A free and open source software license most notably used for the Eclipse IDE and other projects by the Eclipse Foundation. It replaces the Common Public License (CPL) and removes certain terms relating to litigations related to patents.',
  ISC: 'Removes language that would be considered extraneous according to the Berne Convention.',
}

function renderLicenseLink(licenseLink) {
  if (`${resoonse.license}` === licenseOptions){
    return(licenseLink)
  } else {
    return ''
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}

  ${renderLicenseBadge}

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
