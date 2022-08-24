// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Licensing:
  
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ## Table of Contents 

  - [Description](#description)

  - [Installation](#installation)

  - [Usage](#usage)

  - [Credits](#Credits)

  - [Features](#features)

  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.Usage}

  ## License:
  ${data.licensing}

  ## Credits:
  ${data.Credits}

  ## Features:
  ${data.features}

  ## Additional Info:

  - Github: [${data.github}](https://github.com/${data.github})

  - Email: ${data.email} `;
  
}
module.exports = generateMarkdown;