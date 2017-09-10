
var newItemInput = document.querySelector('.new-item')
var addBTN = document.querySelector('.add-btn');
var todoList = document.querySelector('ul')
var listItems = document.querySelectorAll('li')
var groupBTN = document.querySelector('.group-btn');

addBTN.addEventListener('click', function(event){

  var newItemValue = newItemInput.value;

  var newListItem = document.createElement('li');
  newListItem.textContent = newItemValue;
  todoList.appendChild (newListItem);
    newItemInput.value = ''

})
