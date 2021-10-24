const getLicense =licenseType =>{
    console.log(licenseType);
    if (licenseType === 'MIT'){
        return `  ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`;

    }
    if (licenseType === 'GNU'){
        return ` [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    }

    if (licenseType === 'Mozilla'){
        return `  [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

    }

    if (licenseType === 'Apache'){
        return ` [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }

    if (licenseType === 'IBM'){
        return ` IBM [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
   
   
};}


const generatePage = userdata => {
    return `   
# ${userdata.projectTitle} ${getLicense(userdata.license)}

## Description: 
 ${userdata.discription} 

## Table of Contents:
[Installation](#installation)  
[Usage](#usage)   
[License](#license)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  

## Installation:
 ${userdata.installation}

## Usage : 
${userdata.usage}

## contributing:
${userdata.contributing}

## Tests:
${userdata.test}

## License:
${getLicense(userdata.license)}

## Questions :
 For more information please reach  me out through:
 * Github:${userdata.githubUser}
 * Email:${userdata.email}
`;        
};

module.exports = generatePage;