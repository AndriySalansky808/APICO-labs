export function renderTask() 
{
  return `
    <div class="task-card task-expanded">
      <h2>Завдання 2. Робота з об’єктом</h2>
      <p>
        Виконайте завдання: створіть об’єкт, додайте/змініть/видаліть властивості.
      </p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task3-2">Виконати завдання</button>
      <div id="result-task3-2" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task3-2").addEventListener("click", () => {
    let user = {};
    user.name = "Іван";
    user.surname = "Сміт";
    user.name = "Петро";
    delete user.name;

    let output = JSON.stringify(user, null, 2);
    document.getElementById("result-task3-2").innerHTML = `<pre>${output}</pre>`;
  });
}

export function getCode() 
{
  return `
let user = {};
user.name = "Іван";
user.surname = "Сміт";
user.name = "Петро";
delete user.name;
  `;
}
