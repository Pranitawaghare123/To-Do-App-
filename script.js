const add_task_Button = document.querySelector(".add")
const main_container = document.querySelector(".container")
const task_list=document.querySelector(".task_list")
// form creation 
let form_Html = ` <form class="form">
                <section>
                    <div class="heading">
                    <h1>Create Task</h1>
                    <i class="ri-close-fill"></i>
                    </div>
                </section>
                <section>
                    <label for="Task_title">Task Title</label>
                    <input class="input_form" id="title" name="ask_title" type="text" placeholder="Enter task Title">
                </section>
                <section>
                    <label for="Task_des">Task description</label>
                    <textarea name="Task_des"  id="des" placeholder="Enter task description" rows="5" id=""></textarea>
                </section>
                <section>
                    <label for="Due_Date">Due Date</label>
                    <input class="input_form" id="date" for="Due_Date" type="date" placeholder="Enter task Title">
                </section>
                <section>
                    <label for="priority">Priority</label>
                    <select name="priority" id="priority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </section >
                <button  type="submit" class="create_task">create task</button>
                </section>

            </form>`
// creating task
add_task_Button.addEventListener("click", (e) => {
    if(document.querySelector(".task_form_container")) return;
    let form = document.createElement("div")
    form.classList.add("task_form_container")
    form.innerHTML = form_Html;
    main_container.append(form)

    // closing form
    const close_form = form.querySelector(".ri-close-fill")
    close_form.addEventListener("click", (e) => {
        const form_container = document.querySelector(".task_form_container")
        main_container.removeChild(form_container)
    })
   

    // creating data
     const form_data=document.querySelector(".form")
     const title=document.querySelector("#title")
     const des=document.querySelector("#des")
     const date=document.querySelector("#date")
     const priority=document.querySelector("#priority")
       
     form_data.addEventListener("submit",(e)=>{
        const time=Date.now()
        e.preventDefault()
        formValidation(title.value,des.value,date.value,priority.value,time)
        form_data.reset()
       
     })
     

})


function formValidation(title,des,date,priority,time){
    if(title == "" || des == "" || date == "" || priority ==""){
       alert("Please fill in all input fields.")
    }
    else{
         let obj={
            id:time,
            taskTitle:title,
            taskDes:des,
            taskDueDate:date,
            taskPriority:priority
        }
        Data(obj)
    }
}
let taskDataStore=JSON.parse(localStorage.getItem("taskData"))||[]
// saving data
function Data(obj){
    taskDataStore.push(obj)
    localStorage.setItem("taskData",JSON.stringify(taskDataStore))
    displayTask(taskDataStore)
}


function displayTask(taskData){
    task_list.innerHTML=""
    taskData.forEach(e => {
        task_list.innerHTML+=` <div class="task1" id="${e.id}">
        <div class="div div1">
            <h4>${e.taskTitle}</h4>
            <p>${e.taskDes}</p>
        </div>
        <div class="div div2">
            <small>${e.taskDueDate}</small>
            <span>${e.taskPriority}</span>
        </div>
        <div class="div div3">
         <i class="ri-delete-bin-5-line delete"></i>
        </div>
       
        </div>`
    });
    const delete_task=document.querySelectorAll(".delete")
    delete_task.forEach((e)=>{
        e.addEventListener("click",(e)=>{
        deleteTask(e.target.parentElement.parentElement.id)
    })
    })
    
}

function deleteTask(e){
    taskData=taskData.filter(elem => elem.id !== Number(e))
    localStorage.setItem("taskData",JSON.stringify(taskData))
    displayTask()
}
displayTask(taskDataStore)


// search code
const search_icon=document.querySelector(".search_icon")
// search_icon.addEventListener("click",(e)=>{
//     console.log("click on search button")
//     const input_value=document.querySelector("#task_search").value;
//     if(input_value ==="") return;
//     console.log(input_value);
//     const title=[]
//     const dataToStore=JSON.parse(localStorage.getItem("taskData"))
//     dataToStore.forEach((e)=>{
//         if(e.taskTitle.includes(input_value)){
//             console.log("found data",e)
//             displayTask(taskData)
//         }
//     })


// })


search_icon.addEventListener("click", () => {

    const input_value = document
        .querySelector("#task_search")
        .value
        .trim()
        .toLowerCase();

    // get data from localStorage
    const taskData = JSON.parse(localStorage.getItem("taskData")) || [];

    // if search empty show all tasks
    if (input_value === "") {
        displayTask(taskData);
        return;
    }

    // filter matching tasks
    const searchedTask = taskData.filter((task) => {

        return (
            task.taskTitle.toLowerCase().includes(input_value) ||
            task.taskDes.toLowerCase().includes(input_value)
        );

    });

    // display matched tasks
    displayTask(searchedTask);

    document.querySelector("#task_search").value=""
   
});