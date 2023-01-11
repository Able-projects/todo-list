let addInput = document.getElementById('add-task-input')
let addBtn = document.getElementById('add-task-btn')
let taskList = document.querySelector('.task-list-block ul')
let taskListItem1 = document.querySelectorAll('.task-list-block li')
let removeTaskList = document.getElementsByClassName('remove-btn')
let pEmpty = document.querySelector('.task-list-block p')

addBtn.addEventListener('click', () => {
    if(addInput.value.length > 0){
        let span1 = document.createElement('span')
        let li = document.createElement('li')
        let removeTask = document.createElement('span')
        removeTask.textContent = 'x'
        removeTask.className = 'remove-btn'
        span1.textContent = addInput.value
        li.appendChild(span1)
        li.appendChild(removeTask)
        li.addEventListener('click', () => {
            li.classList.toggle('completed')
        })
        removeTask.addEventListener('click', () => {
            removeTask.parentElement.style.display = 'none'
            if(taskListItem1.length <= 0) {
                pEmpty.style.display = 'block' 
            }
        })
        pEmpty.style.display = 'none'
        taskList.appendChild(li)
        addInput.value = ''
    }else{
        alert('Can not add empty task!')
    }
})

// for(let i = 0; i < taskListItem1.length; i++){
//     taskListItem1[i].addEventListener('click', () => {
//         taskListItem1[i].classList.toggle('completed')
//     })
//     removeTaskList[i].addEventListener('click', () => {
//         removeTaskList[i].parentElement.style.display = 'none'
//     })
// }