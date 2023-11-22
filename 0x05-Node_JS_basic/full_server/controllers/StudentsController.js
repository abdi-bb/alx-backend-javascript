const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentGroups = await readDatabase('../database.csv');

      res.status(200).send('This is the list of our students\n');

      Object.entries(studentGroups).sort().forEach(([field, students]) => {
        const studentList = students.map((student) => student.firstname).join(', ');
        res.write(`Number of students in ${field}: ${students.length}. List: ${studentList}\n`);
      });

      res.end();
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentGroups = await readDatabase('../database.csv');
      const students = studentGroups[major] || [];

      const studentList = students.map((student) => student.firstname).join(', ');

      res.status(200).send(`List: ${studentList}\n`);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }
}

module.exports = StudentsController;
