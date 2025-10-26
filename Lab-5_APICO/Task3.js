export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 3. Функція, що зберігає ім’я</h2>
      <p>createGreeter(name) → повертає функцію, що при виклику виводить "Привіт, name!"</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="btn-run-task3">Запустити</button>
      <div id="result-task4-3" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("btn-run-task3").addEventListener("click", () => {
    function createGreeter(name) 
    {
      return function() 
      {
        console.log(`Привіт, ${name}!`);
      };
    }

    const greetOlya = createGreeter("Оля");
    const greetMax = createGreeter("Максим");

    greetOlya(); // => "Привіт, Оля!"
    greetMax();  // => "Привіт, Максим!"
    alert("Результат дивись у консолі (Ctrl + Shift + I)");
  });
}

export function getCode() 
{
  return `
function createGreeter(name) 
{
  return function() 
  {
    return \`Привіт, \${name}!\`;
  };
}
  `.trim();
}