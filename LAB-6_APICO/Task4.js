export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 4. Часткове застосування (bind)</h2>
      <p>Створи функцію multiply(), зроби double і triple через <code>bind()</code>.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task6-4">Запустити</button>
      <div id="result-task6-4" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task6-4").addEventListener("click", () => {
    function multiply(a, b) 
    {
      return a * b;
    }

    const double = multiply.bind(null, 2);
    const triple = multiply.bind(null, 3);

    const res = `double(5) = ${double(5)}, triple(5) = ${triple(5)}`;
    console.log(res);
    document.getElementById("result-task6-4").textContent = res;
  });
}

export function getCode() 
{
  return `
function multiply(a, b) 
{
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

double(5); 
triple(5); 
  `.trim();
}
