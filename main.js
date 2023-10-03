//My JS code
console.log("main.js is loaded...");


//My HTML element variables
const input = document.querySelector("#todoinput");
const list = document.querySelector("ul");
const button = document.querySelector("#addtodo");
const info = document.querySelector("small")
const completedinfo = document.querySelector("p")
const todo = document.getElementById("todoList").style.cursor = "pointer";

//My JS variables
let completedCount = 0;
const todoArray = [];


//function to handle change status on object in array
//takes parameter completed (bool)
function changestatus(todoText, completed) {

    //find index, look in objects and value on "name"
    let correctIndex = todoArray.map(t => t.name).indexOf(todoText)

    //change status on the object at correct index
    todoArray[correctIndex].status = completed;
}

button.addEventListener("click", function() {

    //Fetch value from input
    const text = input.value;

    //Check that text is not empty
    if (text.length == 0) {
        info.innerText = "Hey, you need to write something! :)";
        return;
    } else {
        info.innerText = "";
    }

    //Add todo to todoArray
    const todoObject = { name: text, status: false };
    todoArray.push(todoObject);

    // Create li-element in ul
    const item = document.createElement("li");
    list.appendChild(item);

    //create a span-element in our new li and add text
    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);

    //Add a listener to the span & change completedCount
    itemLabel.addEventListener("click", function() {

        //Toggle completed/uncompleted

        if (item.getAttribute("class") == "completed") {

            item.setAttribute("class", "");

            //Change status on object in array to false
            let clickedText = item.firstChild.firstChild.textContent
            changestatus(clickedText, false);
            completedCount--
        } else {
            item.setAttribute("class", "completed");

            //Change status to object in array to true
            let clickedText = item.firstChild.firstChild.textContent
            changestatus(clickedText, true);
            completedCount++
        }

        completedinfo.innerText = `${completedCount} completed`;

    })

    //Empty input field
    input.value = "";
})