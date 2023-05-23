

const newTask = () => {
    const taskInput = document.getElementById('taskInput').value;
    const li = document.createElement('li')
    const item = document.createTextNode(taskInput)
    li.appendChild(item);
    if (taskInput === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("taskInput").value = "";
}