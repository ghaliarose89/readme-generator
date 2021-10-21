const getLicense =licenseType =>{
    console.log(licenseType);
    if (licenseType === 'MIT'){
        return ` ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`;

    }
    if (licenseType === 'GNU'){
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    }

    if (licenseType === 'Mozilla'){
        return ` [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

    }

    if (licenseType === 'Apache'){
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }

    if (licenseType === 'Unlicense'){
        return `
    [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
   
   
};}


const generatePage = userdata => {
    //console.log(userdata);
   // const {projectTitle,discription,installation,test,usage,contributing,githubUser,email} = userdata;
    return `   
# ${userdata.projectTitle} ${getLicense(userdata.license)}

## Description:  ${userdata.discription} 

## Table of Contents:
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Credits](#credits)  
[License](#license)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  

## Installation: ${userdata.installation}

## Usage : ${userdata.usage}

## contributing:${userdata.contributing}

## Tests:${userdata.test}

## Questions : for more informations please reach  me out through:
 * Github:${userdata.githubUser}
 * Email:${userdata.email}
`;        
};

module.exports = generatePage;