let todoItem = document.querySelector("#noteitem");
let inputItem = document.querySelector("#inputbox");
let addBtn = document.querySelector("#addbutton");
let deleteAllBtn = document.querySelector("#deleteallbtn");
let sortBtn = document.querySelector("#sortbtn");
let sortBtn2 = document.querySelector("#sortbtn2");
let taskArray = [];

// Sort function of list items A-Z
sortBtn.addEventListener("click", (e) => {
  todoItem.textContent = "";
  taskArray
    .sort()
    .reverse()
    .forEach((e) => addto(e));
});

// Sort function of list items Z-A
sortBtn2.addEventListener("click", (e) => {
  todoItem.textContent = "";
  taskArray.sort().forEach((e) => addto(e));
});
//
// Add Event listeners for the button and keypress and exclude whitespace using regex
//
deleteAllBtn.addEventListener("click", (e) => {
  todoItem.textContent = "";
  taskArray = [];
});

inputItem.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" || inputItem.value.match(/^\s*$/)) return;
  if (inputItem.value === "") return;
  addto(inputItem.value);
  taskArray.push(inputItem.value);
  inputItem.value = "";
});

addBtn.addEventListener("click", (e) => {
  if (inputItem.value === "" || inputItem.value.match(/^\s*$/)) return;
  addto(inputItem.value);
  taskArray.push(inputItem.value);
  inputItem.value = "";
  inputItem.focus();
});
//
// Create the todo function. Creating the elements and time and delete button
//
function addto(todo) {
  // Get currentime when using the function ✅
  let time = new Date();
  // Create elements
  const todoElements = document.createElement("li");
  const timeElements = document.createElement("p");
  const todoList = document.querySelector("#noteitem");
  // Time options and setup
  let options = { hour: "numeric", minute: "numeric", month: "long", day: "numeric" };
  timeElements.innerText = `${time.toLocaleString("en-GB", options)}`;
  todoElements.innerText = "✅" + todo;
  timeElements.className = "timelmnt";
  todoElements.append(timeElements);
  // Using prepend to get item first in the list (before first child of a parent node)
  todoList.prepend(todoElements);
  // Make delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌ Delete";
  deleteBtn.className = "deleteBtn1";
  todoElements.append(deleteBtn);
  // Remove the list item and remove item from the array on click of button
  deleteBtn.addEventListener("click", function () {
    todoElements.remove();
    taskArray.splice(taskArray.indexOf(todo), 1);
  });
}

// OLD

// function addItems() {
//   const todoElements = document.createElement("li");
//   const todotextElement = document.createElement("p");
//   todoElements.textContent = inputItem.value;
//   // document.querySelector("#noteitem").textContent += inputItem.value;
//   console.log(todoElements.value);
// }

// // Sort function of list items A-Z
// function sortList() {
//   let list, i, switching, b, shouldSwitch;
//   list = document.querySelector("#noteitem");
//   switching = true;
//   /* Make a loop that will continue until
//   no switching has been done: */
//   while (switching) {
//     // Start by saying: no switching is done:
//     switching = false;
//     b = list.querySelectorAll("LI");
//     // Loop through all list items:
//     for (i = 0; i < b.length - 1; i++) {
//       // Start by saying there should be no switching:
//       shouldSwitch = false;
//       /* Check if the next item should
//       switch place with the current item: */
//       if (b[i].textContent.toLowerCase() > b[i + 1].textContent.toLowerCase()) {
//         /* If next item is alphabetically lower than current item,
//         mark as a switch and break the loop: */
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /* If a switch has been marked, make the switch
//       and mark the switch as done: */
//       b[i].parentNode.insertBefore(b[i + 1], b[i]);
//       switching = true;
//     }
//   }
// }
