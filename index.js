 
 const taskinput = document.getElementById('task');
 const descinput = document.getElementById('description');
 const dateinput = document.getElementById('date');
 const addtaskbtn = document.getElementById('add-task');
 const taskList = document.getElementById('task-list')
 
 inputadd.addEventListener('click',()=>{
 const task = taskinput.value;
 const description = descinput.value;
 const date = dateinput.value;

 if(task.trim()==="" || date ===""){
 alert('please select  current date')
 return;
 }

 const selectDate = new Date(date)
 const currentDate = new Date();

 if(selectedDate<=currentDate){
    alert('Please select currrent date');
    return;
 }

const taskItem = document.createElement('div');
taskItem.classList.add('task');
taskItem.innerHTML = `
<p>${task}</p>
<p>description:${description}</p>
<p>date:${date}</p>
<button class = "Mark-done">Mark Done</button>`;

taskList.appendChild(taskItem);
taskinput.value ="";
descinput.value ='top';
dateinput.value = "";

});
 taskList.addEventListener('click',(event)=>{
if(event.target.classList.contains('Mark-done')){
    const taskItem = event.target.parentElement;
    taskItem.style.backGroundcolor = 'red';
    event.target.disabled = true;

}

});
 