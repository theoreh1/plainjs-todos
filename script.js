document.addEventListener('DOMContentLoaded', function() {
    var theForm = document.getElementById('the-form')
    var myArray = []

    theForm.addEventListener('submit',function(event) {
        //prevent page from reloading
        event.preventDefault()

        // taret new-todo-field
        var newToDoField = document.getElementById('new-todo-field')
        // store the value of the input field
        var newTodo = newToDoField.value
        // Append the array
        myArray.push(newTodo)
        document.getElementById('list-of-todos').innerText=""

        for (var i=0; i < myArray.length; i++){
            createListItem(myArray[i])
        }
        // Clear out text box
        document.getElementById('new-todo-field').value=""
        

    })

    function createListItem(newItem){
        // create new list item element
        var newListItem = document.createElement('li')
        // add the todo to the list item
        newListItem.innerText = newItem
        var listOfTodos = document.getElementById('list-of-todos')
        listOfTodos.appendChild(newListItem)

    }
})