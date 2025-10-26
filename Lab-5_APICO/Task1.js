export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 1. Лічильник кроків</h2>
      <p>Створіть функцію <code>createStepCounter()</code>, яка повертає об’єкт з методами <code>step()</code> і <code>getSteps()</code>. Кількість кроків має зберігатися в замиканні.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="btn-run-task1">Запустити</button>
      <div id="result-task4-1" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("btn-run-task1").addEventListener("click", () => {
    function createStepCounter() 
    {
      let steps = 0;
      return {
        step() 
        {
          steps++;
        },
        getSteps() 
        {
          return steps;
        }
      };
    }

    const counter = createStepCounter();
    counter.step();
    counter.step();
    console.log("🔹 Кроків зроблено:", counter.getSteps()); // => 2
    alert("Результат дивись у консолі (Ctrl + Shift + I)");
  });
}

export function getCode() 
{
  return `
function createStepCounter() 
{
  let steps = 0;
  return 
  {
    step() { steps++; },
    getSteps() { return steps; }
  };
}
  `.trim();
}