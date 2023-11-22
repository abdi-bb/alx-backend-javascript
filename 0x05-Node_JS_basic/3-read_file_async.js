const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Cannot load the database: ${err}`));
      } else {
        const lines = data.split('\n').filter((line) => line !== '');

        const fields = {};
        let total = 0;

        lines.forEach((line, index) => {
          // Skip the header line
          if (index === 0) {
            return;
          }

          const student = line.split(',');
          const field = student[3];

          if (field in fields) {
            fields[field].push(student[0]);
          } else {
            fields[field] = [student[0]];
          }

          total += 1;
        });

        console.log(`Number of students: ${total}`);

        Object.keys(fields).forEach((field) => {
          const students = fields[field];
          const count = students.length;
          const list = students.join(', ');

          console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
