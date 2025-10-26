export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 2. Використання call</h2>
      <p>Створи функцію introduce() і виклич її з контекстом через <code>call()</code>.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task6-2">Запустити</button>
      <div id="result-task6-2" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task6-2").addEventListener("click", () => {
    function introduce() 
    {
      return `Мене звати ${this.name}, мені ${this.age} років.`;
    }

    const person = { name: "Олег", age: 25 };

    const res = introduce.call(person);
    console.log(res);
    document.getElementById("result-task6-2").textContent = res;
  });
}

export function getCode() 
{
  return `
function introduce() {
  return \`Мене звати \${this.name}, мені \${this.age} років.\`;
}

const person = { name: "Олег", age: 25 };

introduce.call(person); 
  `.trim();
}
