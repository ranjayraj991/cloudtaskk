function addTask() {

    const input = document.getElementById("taskInput");

    const taskText = input.value.trim();

    if(taskText === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>

        <button onclick="this.parentElement.remove()">
            ❌
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

document
.getElementById("taskInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});