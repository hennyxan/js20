
function addNewElement() {
    
    var contentValue = document.getElementById('inputContent').value;
    var classValue = document.getElementById('inputClass').value;

    
    var newOption = document.createElement('option');
    newOption.textContent = contentValue;
    newOption.value = classValue;

    
    document.getElementById('tags').appendChild(newOption);
}

function createNewElement() {
    
    var contentValue = document.getElementById('emptyInputContent').value;
    var classValue = document.getElementById('emptyInputClass').value;

    
    var newElement = document.createElement('div');
    newElement.textContent = contentValue;
    newElement.className = classValue;

    
    document.body.appendChild(newElement);
}