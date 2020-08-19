'use strict';

const myList = document.getElementById('myList');
const inputItems = document.querySelectorAll('input');
const parentList = document.createElement('ul');
myList.appendChild(parentList);

function addItemsToList(inputItems, parentList) {
    inputItems.forEach(function(item) {
        const itemName = item.value;
        const itemList = document.createElement('li');
        itemList.innerHTML = itemName;
        parentList.appendChild(itemList);
    });
};

generateList.addEventListener('click', function (event) {
    event.preventDefault();

    addItemsToList(inputItems, parentList);
});