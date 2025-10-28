const addTask = document.querySelector("#add-task"); // Getting the form for adding new task
const tasks = document.getElementById("tasks");

const taskStatus = document.querySelector(".task-status");

if (tasks.length == 0) {
  taskStatus.textContent = "No Tasks";
}

addTask.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents the page from reloading

  const task = document.getElementById("task");
  let newTask = task.value;
  let validTask = newTask.trim();

  if (validTask.length != 0) {
    const br = document.createElement("br");
    const check = document.createElement("input");

    check.type = "checkbox";
    check.setAttribute("class", "checkbox");
    const label = document.createElement("label");

    label.textContent = validTask;
    tasks.appendChild(check);
    tasks.appendChild(label);
    tasks.appendChild(br);

    task.value = ""; // resets the textarea
  } else {
    userReply = prompt("No task added. Do you want to continue?(y/n)")
      .trim()
      .toLowerCase();

    if (["y", "yes", ""].includes(userReply.toLowerCase())) {
      const br = document.createElement("br");
      const check = document.createElement("input");

      check.type = "checkbox";
      check.setAttribute("class", "checkbox");

      const label = document.createElement("label");

      label.textContent = "No task";
      label.style.color = "grey";
      tasks.appendChild(check);
      tasks.appendChild(label);
      tasks.appendChild(br);
    }
  }

  let numOfTask = tasks.length;

  if (tasks.length != 0) {
    taskStatus.textContent = `You have ${numOfTask} tasks`;
  }
});

const mode = document.querySelector(".change-mode");
const modeBtn = document.querySelector(".mode-btn");

modeBtn.addEventListener("click", function () {
  const modeAttribute = mode.getAttribute("href");

  if (modeAttribute == "style.css") {
    mode.setAttribute("href", "dark-mode.css");
    modeBtn.innerHTML =
      '<img class="mode-img" src="light-mode.png" alt="">';
  } else {
    mode.setAttribute("href", "style.css");
    modeBtn.innerHTML =
      '<img class="mode-img" src="dark-mode.png" alt="">';
  }
});
