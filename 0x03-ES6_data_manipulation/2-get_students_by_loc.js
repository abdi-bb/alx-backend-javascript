export default function getStudentsByLocation(students, city) {
  return students.filter((students) => students.location === city);
}
