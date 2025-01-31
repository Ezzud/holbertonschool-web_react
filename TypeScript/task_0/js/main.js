const student1 = {
    firstName: "Ali",
    lastName: "Khan",
    age: 20,
    location: "New York",
};
const student2 = {
    firstName: "Debbie",
    lastName: "Smith",
    age: 22,
    location: "London",
};
const studentsList = [student1, student2];

document.addEventListener("DOMContentLoaded", function () {
    const table = document.createElement("table");

    /**
     * Create and append header row with "First Name" and "Location" columns
     */
    const headerRow = table.insertRow();
    const headerNames = ["First Name", "Location"];
    headerNames.forEach(function (name) {
        const th = document.createElement("th");
        th.textContent = name;
        headerRow.appendChild(th);
    });

    /**
     * Create and append a row for each student with their first name and location
     */
    studentsList.forEach(function (student) {
        const row = table.insertRow();
        const cellFirstName = row.insertCell();
        const cellLocation = row.insertCell();
        cellFirstName.textContent = student.firstName;
        cellLocation.textContent = student.location;
    });

    /**
     * Append the table to the body of the document
     */
    document.body.appendChild(table);
});