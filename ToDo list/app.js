const input = document.getElementById('input');
const button = document.getElementById('btn');
const list = document.getElementById('list');
const counter = document.getElementById('count');
const finishedTaskList = document.getElementById('finishedList');
const finishedTaskCount = document.getElementById('finishedTaskText');
let taskCount = 0;
let finishedTaskCounter = 0;

function addTask() {
  if (input.value === '') {
    alert('Add your task!');
    return;
  }

  createDeleteElements(input.value);
  input.value = '';
}

const createDeleteElements = (value) => {
  taskCount++;
  console.log(value);

  // Create Task list item
  const li = document.createElement('li');
  li.className = 'li';
  li.textContent = value;

  //Remove Button in the list item
  const btn = document.createElement('button');
  btn.className = 'btn-remove';
  btn.textContent = 'Remove';
  li.appendChild(btn);

  // Finished Task button
  const edit = document.createElement('button');
  edit.className = 'editBtn';
  edit.textContent = 'Finished';
  li.appendChild(edit);

  //Finished Task (mark)
  edit.addEventListener('click', () => {
    li.style.textDecoration = 'line-through';
    li.style.fontStyle = 'italic';
    li.removeChild(edit);

    const finishedLi = document.createElement('li');
    finishedLi.className = 'finishedLi';
    finishedLi.textContent = value;
    finishedTaskList.appendChild(finishedLi);
    finishedTaskCounter++;
    finishedTaskCount.textContent = `Finished Tasks : #${finishedTaskCounter}`;

    finishedLi.addEventListener('click', () => {
      finishedLi.remove();
      finishedTaskCounter--;
      finishedTaskCount.textContent = `Finished Tasks : #${finishedTaskCounter}`;
    });
  });

  //Remove Task
  btn.addEventListener('click', () => {
    li.remove();

    taskCount--;
    counter.textContent = `Total Tasks : ${taskCount}`;
  });
  list.appendChild(li);

  //Total Tasks count
  counter.textContent = `Total Tasks : #${taskCount}`;
};

button.addEventListener('click', addTask);
