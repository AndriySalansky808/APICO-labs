export function renderTask() 
{
  return `
    <div class="task-card task-expanded">
      <h2>Завдання 5. Об’єднання двох масивів</h2>
      <p>
        Напишіть функцію <code>mergeArrays(arr1, arr2)</code>, яка об’єднує два масиви.
      </p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task3-5">Виконати завдання</button>
      <div id="result-task3-5" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task3-5").addEventListener("click", () => 
    {
    function mergeArrays(arr1, arr2) 
    {
      return [...arr1, ...arr2];
    }

    let output = `
      [1,2] + [3,4] → ${JSON.stringify(mergeArrays([1,2],[3,4]))}<br>
      ["a","b"] + ["c"] → ${JSON.stringify(mergeArrays(["a","b"],["c"]))}
    `;
    document.getElementById("result-task3-5").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function mergeArrays(arr1, arr2) 
{
  return [...arr1, ...arr2];
}
  `;
}
