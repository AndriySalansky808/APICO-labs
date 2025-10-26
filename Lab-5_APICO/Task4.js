export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 4. Затриманий лічильник</h2>
      <p>Цикл від 1 до 5, який виводить значення i у консоль через i секунд (послідовно).</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="btn-run-task4">Запустити</button>
      <div id="result-task4-4" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("btn-run-task4").addEventListener("click", () => {
    for (let i = 1; i <= 5; i++) 
    {
      setTimeout(() => console.log(i), i * 1000);
    }
    alert("Через 5 секунд у консолі з’являться числа 1–5");
  });
}

export function getCode() 
{
  return `
for (let i = 1; i <= 5; i++) 
{
  setTimeout(() => console.log(i), i * 1000);
}
  `.trim();
}