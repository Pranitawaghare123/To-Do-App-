const add_task_Button = document.querySelector(".add")
const main_container = document.querySelector(".container")

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
                    <input class="input_form" name="ask_title" type="text" placeholder="Enter task Title">
                </section>
                <section>
                    <label for="Task_des">Task description</label>
                    <textarea name="Task_des" placeholder="Enter task description" rows="5" id=""></textarea>
                </section>
                <section>
                    <label for="Due_Date">Due Date</label>
                    <input class="input_form" for="Due_Date" type="date" placeholder="Enter task Title">
                </section>
                <section>
                    <label for="priority">Priority</label>
                    <select name="priority" id="">
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
    let form = document.createElement("div")
    form.classList.add("task_form_container")
    form.innerHTML = form_Html;
    main_container.append(form)

    // closing form
    const close_form = document.querySelector(".ri-close-fill")
    close_form.addEventListener("click", (e) => {
        const form_container = document.querySelector(".task_form_container")
        main_container.removeChild(form_container)
    })
   

    // creating data
     const form_data=document.querySelector(".form")
     form.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log("form submit")
        let obj={
            taskTitle:
        }
     })

})

