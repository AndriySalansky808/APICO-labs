export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 3. Використання apply</h2>
      <p>Створи функцію showFullNameAndCity(surname, city) і виклич її через <code>apply()</code>.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task6-3">Запустити</button>
      <div id="result-task6-3" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task6-3").addEventListener("click", () => {
    function showFullNameAndCity(surname, city) 
    {
      return `Мене звати ${this.name} ${surname} і я з міста ${city}.`;
    }

    const user = { name: "Анна" };
    const res = showFullNameAndCity.apply(user, ["Коваль", "Київ"]);

    console.log(res);
    document.getElementById("result-task6-3").textContent = res;
  });
}

export function getCode() 
{
  return `
function showFullNameAndCity(surname, city) 
{
  return \`Мене звати \${this.name} \${surname} і я з міста \${city}.\`;
}

const user = { name: "Анна" };
showFullNameAndCity.apply(user, ["Коваль", "Київ"]);
  `.trim();
}
