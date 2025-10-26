export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 2. Перевірка на парність масиву</h2>
      <p>Напишіть функцію, яка повертає "YES", якщо всі числа у масиві парні, і "NO" — якщо ні.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task4-2">Виконати завдання</button>
      <div id="result-task4-2" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task4-2").addEventListener("click", () => 
  {
    function isEvenArray(initialArray) 
    {
      return initialArray.every(num => num % 2 === 0) ? "YES" : "NO";
    }

    let output = `
      [1, 2, 3, 9] → ${isEvenArray([1, 2, 3, 9])}<br>
      [2, 4, 6] → ${isEvenArray([2, 4, 6])}
    `;
    document.getElementById("result-task4-2").innerHTML = output;
  });
}

export function getCode()
{
  return `
function isEvenArray(initialArray) 
{
  return initialArray.every(num => num % 2 === 0) ? "YES" : "NO";
}
  `;
}
