let btn = document.querySelector("#submit");
let tableBody = document.querySelector("#book-list");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let isbn = document.querySelector("#isbn");

function addRow() {
    // Create a new row
    let newRow = tableBody.insertRow();

    // Insert new cells
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);

    // Set cell values
    newCell1.textContent = title.value;  
    newCell2.textContent = author.value;
    newCell3.textContent = isbn.value;
    newCell4.innerHTML = "<button class='delete'>Delete</button>";

    // Clear input fields
    title.value = '';
    author.value = '';
    isbn.value = '';
}

// Event listener for adding a row
btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    addRow();
});

// Event listener for deleting a row
tableBody.addEventListener("click", function(e) {
    if (e.target.classList.contains('delete')) {
        let row = e.target.closest('tr'); // Get the closest row
        tableBody.deleteRow(row.rowIndex); // Delete the row
    }
});