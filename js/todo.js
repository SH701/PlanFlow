const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list"); // 상단 리스트
const completedList = document.querySelector("#completed-list"); // ✅ 완료된 리스트 박스
const listbox = document.querySelector("#listbox"); // 리스트 박스
const completedBox = document.querySelector("#completed-box"); // ✅ 완료된 박스

const TODOS_KEY = "toDos";
const COMPLETED_KEY = "completedToDos";

let toDos = [];
let completedToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  localStorage.setItem(COMPLETED_KEY, JSON.stringify(completedToDos));
}

function moveToCompleted(event) {
  const li = event.target.parentElement;
  li.remove();
  const movedTodo = toDos.find(toDo => toDo.id === parseInt(li.id));
  if (movedTodo) {
    toDos = toDos.filter(toDo => toDo.id !== movedTodo.id); 
    completedToDos.push(movedTodo);
    paintCompleted(movedTodo);
    saveToDos();
  }
}
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  completedToDos = completedToDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}


function paintCompleted(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerText = newToDo.text;
  span.style.fontSize = "22px";
  span.style.fontWeight = "bold";

  const button = document.createElement("button");
  button.innerText = "❌";
  button.style.backgroundColor = "transparent";
  button.style.borderWidth = 0;
  button.style.fontSize = "24px";
  button.style.cursor = "pointer";
  button.addEventListener("click", deleteTodo); 

  li.appendChild(span);
  li.appendChild(button);
  completedList.appendChild(li);

}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerText = newToDo.text;
  span.style.fontSize = "22px";
  span.style.fontWeight = "bold";

  const button = document.createElement("button");
  button.innerText = "✔";
  button.style.backgroundColor = "transparent";
  button.style.borderWidth = 0;
  button.style.color="green";
  button.style.fontSize = "24px";
  button.style.cursor = "pointer";
  button.addEventListener("click", moveToCompleted); 

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);


}

// ✅ 입력창에서 입력하면 아래 리스트로 이동
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value.trim();
  if (newToDo === "") return;

  toDoInput.value = "";
  const newTodoObj = { text: newToDo, id: Date.now() };
  toDos.push(newTodoObj);

  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(paintToDo);
}

const savedCompletedToDos = localStorage.getItem(COMPLETED_KEY);
if (savedCompletedToDos !== null) {
  completedToDos = JSON.parse(savedCompletedToDos);
  completedToDos.forEach(paintCompleted);
}