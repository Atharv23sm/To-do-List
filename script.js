const ipbox = document.getElementById('input1');
const tasklist = document.getElementById('tasklist');

function addTask() {

    if (ipbox.value === "") {
        alert("Enter a task.");
    }

    else {
        var d = document.createElement("div");
        d.id = "listdiv";

        var task = document.createElement("li");
        task.innerHTML = ipbox.value;

        var check = document.createElement('input');
        check.type = "checkbox";
        check.addEventListener('click', function () {
            if (this.checked == 1) {
                task.style.color = "#705f3f";
            } else {
                task.style.color = "#000";
            }
        });

        d.appendChild(check);

        var cross = document.createElement('span');
        cross.innerHTML = "&#10006;"
        cross.style.color = "#000";
        cross.addEventListener('click', function () {
            tasklist.removeChild(task);
        });

        d.appendChild(cross);

        task.appendChild(d);

        tasklist.appendChild(task);

        dataSave();
    }
}

function dataSave() {
    localStorage.setItem("listdata", tasklist.innerHTML);
}

