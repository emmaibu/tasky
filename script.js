const addTask = document.getElementById("add-task"); // Getting the form for adding new task
const tasks = document.getElementById("tasks");

console.log(addTask)

const taskStatus = document.getElementById("task-status");


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
        check.setAttribute('id', 'checkbox')
        const label = document.createElement("label");
        label.classList.add(
            'text-gray-50',
            'ml-4',
            'text-lg',
            'antialiased',
        )

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
            check.setAttribute('id', 'checkbox')

            const label = document.createElement("label");
            label.classList.add(
                'text-gray-50',
                'ml-4',
                'text-lg',
                'antialiased',
                'opacity-50'

            )

            label.textContent = "No task";

            tasks.appendChild(check);
            tasks.appendChild(label);
            tasks.appendChild(br);
        }
    }

    let numOfTask = tasks.length;

    if (tasks.length != 0) {
        taskStatus.textContent = `You have ${numOfTask} tasks`;
    }


    const checkboxes = document.querySelectorAll('#checkbox');

    checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
    const taskText = checkbox.nextElementSibling;

    if (checkbox.checked) {
      taskText.classList.add('line-through', 'opacity-60', 'transition', 'duration-300');
    } else {
      taskText.classList.remove('line-through', 'opacity-60');


    }

  });

    
});


});
