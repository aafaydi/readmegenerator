// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license != "none") {
        return `![GitHub license]`;

    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license != "none") {
        return `[License]`;

    }
    return "";
}
 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license != "none") {
        return `## license
        projectlicense ${license}`;

    }
    return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install  dependencies, run the following:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}
${renderLicenseSection(data.license)}
 
## Contributing
${data.contributing}

## Questions
For questions: ${data.email
        }./).
 
## Tests
Run the following command to test:

\`\`\`
${data.test}
\`\`\`
`;
}

module.exports = generateMarkdown;
