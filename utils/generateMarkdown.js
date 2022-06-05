// created generateMarkdown for the outline of the ReadME
function generateMarkdown(data) {
  return `# ${data.title}


  ![badge](https://img.shields.io/badge/license-${data.license}-blue)<br />


<a name="description"></a>
## Description
  ${data.description}

## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Screenshot](#screenshot)
  - [Questions](#questions)
  
<a name="installation"></a>
## Installation
    ${data.install}

<a name="usage"></a>
## Usage
    ${data.usage}


<a name="credits"></a>
## Credits
    ${data.credit}

<a name="license"></a>
## License
      
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)<br />

    This project is coverted under the ${data.license} License

<a name="how-to-contribute"></a>
## How to contribute
    ${data.contribute}

## Tests
    ${data.tests}

## Screenshot
<p align="center">
  <img src="(${data.screenshot})" width="350"

</p>


## Questions

  If you have any additional questions please contact me: <br />
      - GitHub: ${data.github}  (https://github.com/${data.github})
      - Email:  ${data.email}



`;
}

module.exports = generateMarkdown;
