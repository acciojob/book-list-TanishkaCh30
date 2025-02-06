let btn = document.querySelector("#submit");
let table = document.querySelector("#book-list");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let isbn = document.querySelector("#isbn");

function addRow(){
	let newRow = table.insertRow(1);
	let newCell1 = newRow.insertCell(0);
	let newCell2 = newRow.insertCell(1);
	let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);
    
	newCell1.textContent = title.value;  
	newCell2.textContent = author.value;
	newCell3.textContent = isbn.value;
	newCell4.innerHTML="<button id='delete'>Delete</button>";

	title.value = '';
	author.value = '';
	isbn.value = '';
}

table.addEventListener("click",function(e){
	if(e.target.id==='delete'){
		let row = e.target.parentElement.parentElement;
		table.deleteRow(row.rowIndex);
	}
})

btn.addEventListener("click" , addRow);




