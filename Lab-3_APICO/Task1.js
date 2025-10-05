export function renderTask() 
{
  return `
    <div class="task-card task-expanded">
      <h2>Завдання 1. Власна імплементація Array.includes()</h2>
      <p>
        Напишіть власну реалізацію методу масиву <code>includes()</code>.
      </p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task3-1">Виконати завдання</button>
      <div id="result-task3-1" class="task-result"></div>
    </div>
  `;
}

export function initTask() {
  document.getElementById("run-task3-1").addEventListener("click", () => 
    {
    function myIncludes(array, value) 
    {
      for (let i = 0; i < array.length; i++) 
      {
        if (array[i] === value) return true;
      }
      return false;
    }

    let output = `
      [1,2,3] includes 2 → ${myIncludes([1,2,3], 2)}<br>
      [1,2,3] includes 5 → ${myIncludes([1,2,3], 5)}
    `;
    document.getElementById("result-task3-1").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function myIncludes(array, value) 
{
  for (let i = 0; i < array.length; i++) 
  {
    if (array[i] === value) return true;
  }
  return false;
}
  `;
}
