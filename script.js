let btn = document.querySelector("#submit");
let table = document.querySelector(".table");
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
}

table.addEventListener("click",function(e){
	if(e.target.id==='delete'){
		let row = e.target.parentElement;
		table.deleteRow(row.rowIndex);
	}
})

btn.addEventListener("click" , addRow);




