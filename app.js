document.querySelector('#addButton').addEventListener('click', addItem);
document.querySelector('#deleteAll').addEventListener('click', deleteAll);

function addItem(){

    var text = document.querySelector('#addText').value;

    // new list item

    var newListItem = document.createElement('li');
    var newSpan = document.createElement('span');
    var newListItemText = document.createTextNode(text);
    newSpan.setAttribute('class','listItem');

    // new edit button

    var editButton = document.createElement('button');
    var editButtonText = document.createTextNode('Edit');
    editButton.appendChild(editButtonText);
    editButton.setAttribute('class','editButton');
    editButton.addEventListener('click', editItem);

    // new delete button

    var deleteButton = document.createElement('button');
    var deleteButtonText = document.createTextNode('Delete');
    deleteButton.appendChild(deleteButtonText);
    deleteButton.setAttribute('class','deleteButton');
    deleteButton.addEventListener('click', deleteItem);

    // addition to new list item

    newSpan.appendChild(newListItemText);
    newListItem.appendChild(newSpan);
    newListItem.appendChild(editButton);
    newListItem.appendChild(deleteButton);

    // addition of list item

    document.querySelector('#listItems').appendChild(newListItem);

    // emptying input 

    document.querySelector('#addText').value = "";
}

function editItem(e){
   
    if(e.target.textContent=="Edit")
    {
        var oldValue = e.target.parentNode.firstElementChild.textContent;
        var newInputElement = document.createElement('input');
        newInputElement.setAttribute('type','text');
        newInputElement.setAttribute('class','newInputText');
        newInputElement.value = oldValue;
    
        e.target.parentNode.firstChild.remove();
        var fChild = e.target.parentNode.firstChild;
        e.target.parentNode.insertBefore(newInputElement,fChild);
        // e.target.parentNode.appendChild(newInputElement);
        e.target.textContent="Update";
    }
    else {
        var updatedValue = e.target.parentNode.firstElementChild.value;
        var newSpan = document.createElement('span');
        newSpan.setAttribute('class','listItem');
        var textNode = document.createTextNode(updatedValue);
        newSpan.appendChild(textNode);
        e.target.parentNode.firstElementChild.remove();

        var fChild = e.target.parentNode.firstChild;
        e.target.parentNode.insertBefore(newSpan,fChild);
        // e.target.parentNode.appendChild(newSpan);
        e.target.textContent="Edit";
    }
    

    // var oldValue = e.target.parentNode.firstElementChild.textContent;
    // var newValue = prompt("Enter new value: ",oldValue);
    // e.target.parentNode.firstElementChild.textContent = newValue;
}

function deleteItem(e){

    e.target.parentNode.remove();
}

function deleteAll(e){
    document.querySelector('#listItems').innerHTML = "";
}