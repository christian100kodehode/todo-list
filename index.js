let todoItem = document.querySelector("#noteitem");
let inputItem = document.querySelector("#inputbox");
let addBtn = document.querySelector("#addbutton");
let deleteAllBtn = document.querySelector("#deleteallbtn");
let sortBtn = document.querySelector("#sortbtn");

// Add Event listeners for the two buttons

sortBtn.addEventListener("click", (e) => {
  sortList();
});

deleteAllBtn.addEventListener("click", (e) => {
  return (todoItem.textContent = "");
});

inputItem.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" || inputItem.value.match(/^\s*$/)) return;
  if (inputItem.value === "") return;
  addto();
  // document.querySelector("#noteitem").innerHTML += `<li> ${inputItem.value} </li> `;
  inputItem.value = "";
});

addBtn.addEventListener("click", (e) => {
  if (inputItem.value === "" || inputItem.value.match(/^\s*$/)) return;
  addto();
  // document.querySelector("#noteitem").innerHTML += `<li> ${inputItem.value} </li> `;
  inputItem.value = "";
  inputItem.focus();
});

function addto() {
  // Get currentime when using the function
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let cHour = currentDate.getHours();
  let cMinute = currentDate.getMinutes();

  const todoElements = document.createElement("li");
  todoElements.innerText = `✅ ${inputItem.value}

  ${cHour}:${cMinute} ${cDay}/${cMonth}/${cYear}`;

  console.log(inputItem);

  const todoList = document.querySelector("#noteitem");
  todoList.append(todoElements);
  console.log(todoList);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌ Delete";
  deleteBtn.className = "deleteBtn1";
  todoElements.append(deleteBtn);
  deleteBtn.addEventListener("click", function () {
    todoElements.remove();
  });
}

function sortList() {
  let list, i, switching, b, shouldSwitch;
  list = document.querySelector("#noteitem");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");

    // Loop through all list items:
    for (i = 0; i < b.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].textContent.toLowerCase() > b[i + 1].textContent.toLowerCase());
      {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

// OLD

// function addItems() {
//   const todoElements = document.createElement("li");
//   const todotextElement = document.createElement("p");
//   todoElements.textContent = inputItem.value;
//   // document.querySelector("#noteitem").textContent += inputItem.value;
//   console.log(todoElements.value);
// }
