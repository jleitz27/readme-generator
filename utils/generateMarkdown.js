// created generateMarkdown for the outline of the ReadME
function generateMarkdown(data) {
  return `# ${data.title}


  ![badge](https://img.shields.io/badge/license-${data.license}-blue)<br />


  ## Description
  ${data.description}

  ## Table of Contents
    
  ## Installation
    ${data.install}

  ## Usage
    ${data.usage}


  ## Credits
    ${data.credit}

  ## License
      
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)<br />

    This project is coverted under the ${data.license} License

  ## How to contribute
    ${data.contribute}

  ## Tests
    ${data.tests}

  ## Screenshot
  ![screenshot](${data.screenshot})<br />

  ## Questions

  If you have any additional questions please contact me: <br />
      - GitHub: ${data.github}  (https://github.com/${data.github})
      - Email:  ${data.email}



`;
}

module.exports = generateMarkdown;
