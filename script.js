var editRow = null;
function onFormSubmit(){
    var formData = readData();

    if(editRow == null){
        var table = document.getElementById("list").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = '<button type="button" onClick="onDelete(this)" >Delete</button> &nbsp   <button type="button" onClick="onEdit(this)" >Edit</button>';
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = formData.name;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = formData.age;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = formData.phone;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = formData.gender;
        
    }
    else {
        editRow.cells[1].innerHTML = formData.name;
        editRow.cells[2].innerHTML = formData.age;
        editRow.cells[3].innerHTML = formData.phone;
        editRow.cells[4].innerHTML = formData.gender;
    }
   

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("pno").value = "";
    document.getElementById("gender").value = "";
    editRow = null;
    
};

function readData(){
    var data = {};
    data["name"] = document.getElementById("name").value;
    data["age"] = document.getElementById("age").value;
    data["phone"] = document.getElementById("pno").value;
    data["gender"] = document.getElementById("gender").value;
    return data;
}

function onEdit(cell){
    editRow = cell.parentElement.parentElement;
    document.getElementById("name").value = editRow.cells[1].innerHTML;
    document.getElementById("age").value = editRow.cells[2].innerHTML;
    document.getElementById("pno").value = editRow.cells[3].innerHTML;
    document.getElementById("gender").value = editRow.cells[4].innerHTML;
}

function onDelete(cell){
    delRow = cell.parentElement.parentElement;
    document.getElementById("list").deleteRow(delRow.rowIndex);

}