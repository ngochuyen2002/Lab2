const fs = require('fs');

function JSONToFile(jsonObj) {
    fs.writeFile('output.json', JSON.stringify(jsonObj), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('File written successfully');
        }
    });
}

// Example usage
const exampleData = { key: 'value' };
JSONToFile(exampleData);
