const ipbox = document.getElementById('input1');
const tasklist = document.getElementById('tasklist');

tasklist.innerHTML = localStorage.getItem("listdata")

function addTask() {

    if (ipbox.value === "") {
        alert("Enter a task.");
    }

    else {

        var task = document.createElement("div");
        task.id = "task"
        task.innerHTML = ipbox.value;

        var task_op = document.createElement("div");
        task_op.id = "task_op"

        var check = document.createElement('input');
        check.type = "checkbox";
        check.addEventListener('click', function () {
            if (this.checked == 1) {
                task.style.color = "#764";
            } else {
                task.style.color = "#000";
            }
        });

        var cross = document.createElement('span');
        cross.innerHTML = "&#10006;"
        cross.style.color = "#000";
        cross.style.cursor = 'pointer'
        cross.addEventListener('click', function () {
            tasklist.removeChild(task);
        });

        task_op.appendChild(check);
        task_op.appendChild(cross);
        task.appendChild(task_op)
        tasklist.appendChild(task);

        ipbox.value = ""
    }
}

