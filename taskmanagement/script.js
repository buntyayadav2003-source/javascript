const tasks = [
    {
        id: 101,
        title: "Study basic of programming",
        description: "Watch shorts or Reels on programming",
        status: "pending"
    },
    {
        id: 102,
        title: "Study Advanced CSS",
        description: "For interview Preperation",
        status: "Completed"
    }
]


const titleElmt = document.getElementById("taskTitleInput")
const descriptionElmt = document.getElementById("taskDescriptionInput")

function renderTasks() {
    document.getElementById("renderTasks").innerHTML = tasks.map((tsk, i) => `
                     <tr>
                     <td>${i + 1}</td>
                     <td>${tsk.title}</td>
                     <td>${tsk.description}</td>
                     <td>${tsk.status}</td>
                     <td>
                     <button class="btn btn-success" title="Edit task"
                     onclick=EditTask(${tsk.id})>
                     <i class="fa-solid fa-face-frown-open"></i>
                     </button>
                     <button class="btn btn-danger" title="Delete task"
                     onclick="deleteTask(${tsk.id})">
                     <i class="fa-solid fa-face-angry"></i>
                     </button>

                     </td>
            
                     </tr>
                 

    `).join('')
}

function addNewTask() {
    titleInput = titleElmt.value
    descriptionInput = descriptionElmt.value

    const newTask = {
        id: Date.now(),
        title: titleInput,
        description: descriptionInput,
        status: "Pending"
    }
    console.log("newTask", newTask)


    tasks.push(newTask)
    renderTasks()

    titleElmt.value = ''
    descriptionElmt.value = ''
}

function deleteTask(ID) {
    console.log(ID)

    index = tasks.findIndex((t) => t.id == ID)
    if (index == -1) {
        alert("Task Not found")
    } else {
        tasks.splice(index, 1)
    }
    renderTasks()
}

function EditTask(ID) {
    index = tasks.findIndex((t) => t.id == ID)
    if (index == -1) {
        alert("Task Not found")
    } else {
        if (tasks[index].status == "Pending") {
            tasks[index].status = "Completed"
        } else {
            tasks[index].status = "Pending"
        }

    }
    renderTasks()
}










window.addEventListener('load', () => {
    renderTasks()
})

