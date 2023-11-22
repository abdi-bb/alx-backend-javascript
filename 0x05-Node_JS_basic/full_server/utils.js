const fs = require('fs').promises;

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = lines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      lines.slice(1).forEach((line) => {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      });

      resolve(studentGroups);
    })
    .catch((err) => {
      reject(new Error(`Cannot load the database: ${err.message}`));
    });
});

module.exports = { readDatabase };
