// Store the data in an array
let data = [];

// Function to add new data
function addData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Validate input fields
    if (name === "" || email === "") {
        alert("Please fill out both name and email!");
        return;
    }

    // Add the new data to the array
    let newData = { name: name, email: email };
    data.push(newData);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    // Refresh the data table
    displayData();
}

// Function to display the data in the table
function displayData() {
    let tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear existing data

    // Loop through the data array and create a new row for each item
    data.forEach((item, index) => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerHTML = item.name;
        row.insertCell(1).innerHTML = item.email;

        // Create edit and delete buttons
        let editCell = row.insertCell(2);
        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.classList.add("edit");
        editButton.onclick = () => editData(index);
        editCell.appendChild(editButton);

        let deleteCell = row.insertCell(3);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.onclick = () => deleteData(index);
        deleteCell.appendChild(deleteButton);
    });
}

// Function to edit data
function editData(index) {
    let name = prompt("Enter new name:", data[index].name);
    let email = prompt("Enter new email:", data[index].email);

    if (name && email) {
        data[index].name = name;
        data[index].email = email;
        displayData();
    }
}

// Function to delete data
function deleteData(index) {
    if (confirm("Are you sure you want to delete this data?")) {
        data.splice(index, 1);
        displayData();
    }
}
