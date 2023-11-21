const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');

      let csCount = 0;
      let sweCount = 0;

      const csNames = [];
      const sweNames = [];

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (firstname && field) {
          if (field.trim() === 'CS') {
            csCount += 1;
            csNames.push(firstname.trim());
          } else if (field.trim() === 'SWE') {
            sweCount += 1;
            sweNames.push(firstname.trim());
          }
        }
      });

      console.log(`Number of students: ${csCount + sweCount}`);
      console.log(`Number of students in CS: ${csCount}. List: ${csNames.join(', ')}`);
      console.log(`Number of students in SWE: ${sweCount}. List: ${sweNames.join(', ')}`);

      resolve();
    });
  });
}

module.exports = countStudents;
