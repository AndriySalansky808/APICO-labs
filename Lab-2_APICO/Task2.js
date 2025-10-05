export function renderTask() 
{
  return `
    <div class="task-card">
      <h2>Завдання 2</h2>
      <p>
        Є масив: <code>[3, 2, "2", null, 1.5, 9.5, undefined]</code><br>
        Потрібно знайти суму <b>лише числових значень</b>.
      </p>
      <button id="run-task2-2">Виконати завдання</button>
      <div id="result-task2-2" class="task-result"></div>
       <h3>Код рішення:</h3>
      <pre class="task-code"><code>${getCode()}</code></pre>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task2-2").addEventListener("click", () => 
    {
    function calculateSumOfArray() 
    {
      const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
      return initialArray.reduce((sum, value) => 
        {
        return typeof value === "number" && !isNaN(value) ? sum + value : sum;
      }, 0);
    }

    document.getElementById("result-task2-2").innerHTML =
      `Сума чисел = <b>${calculateSumOfArray()}</b>`;
  });
}

export function getCode()
 {
  return `
function calculateSumOfArray() 
{
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  return initialArray.reduce((sum, value) => 
  {
    return typeof value === "number" && !isNaN(value) ? sum + value : sum;
  }, 0);
}
  `.trim();
}