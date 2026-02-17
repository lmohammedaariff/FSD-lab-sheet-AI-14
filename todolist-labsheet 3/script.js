function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    // Random background color
    const colors = [
        "#ff6b6b", "#6bcB77", "#4d96ff",
        "#f06595", "#ffa94d", "#845ef7"
    ];
    li.style.background = colors[Math.floor(Math.random() * colors.length)];

    // Toggle complete
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete button
    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = " ❌";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
