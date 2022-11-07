class MarkDown {

    static generateReadme(answers){
return `
# ${answers.title}

## Table of Contents
- [Project Description](#description)
- [Install Instructions](#install)
- [Usage Instructions](#usage)
- [Contributions](#contributions)
- [Test Instructions](#testing)
- [License](#license)
- [GitHub Username](#github)
- [Contact Information](#contact)

## Description
${answers.description}

## Install
${answers.instructions}

## Usage
${answers.usage}

## Contributions
${answers.contributions}

## Testing
${answers.testing}

## License
${answers.license}

## GitHub
${answers.github}

## Contact
${answers.contact}



`
    }
}

module.exports = MarkDown