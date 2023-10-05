// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Abdi",
    lastName: "Berhe",
    age: 28,
    location: "Addis Ababa",
  };
  
  // Create an array containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Create a table with styling
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  table.style.background = "yellow";
  table.style.borderCollapse = "collapse";
  
  studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');
  
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    nameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    nameCell.style.padding = "10px";
    locationCell.style.padding = "10px";
  
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  // Append the table to the document body
  table.appendChild(tbody);
  document.body.appendChild(table);
  
