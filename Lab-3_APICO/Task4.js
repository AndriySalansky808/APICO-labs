export function renderTask() 
{
  return `
    <div class="task-card task-expanded">
      <h2>Завдання 4. Функція isEmpty(obj)</h2>
      <p>
        Реалізуйте функцію, яка перевіряє, чи об’єкт порожній.
      </p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task3-4">Виконати завдання</button>
      <div id="result-task3-4" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task3-4").addEventListener("click", () => 
    {
    function isEmpty(obj) 
    {
      for (let key in obj) return false;
      return true;
    }

    let schedule = {};
    let output = `
      {} → ${isEmpty(schedule)}<br>
    `;
    schedule["8:30"] = "Вставай";
    output += `{"8:30": "Вставай"} → ${isEmpty(schedule)}`;

    document.getElementById("result-task3-4").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function isEmpty(obj) 
{
  for (let key in obj) 
  {
    return false;
  }
  return true;
}
  `;
}
