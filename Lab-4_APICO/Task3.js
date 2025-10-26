export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 3. Відфільтрувати лише рядки</h2>
      <p>Створіть функцію, що повертає масив лише з рядками з початкового масиву.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task4-3">Виконати завдання</button>
      <div id="result-task4-3" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task4-3").addEventListener("click", () => 
  {
    function filterArray(initialArray) 
    {
      return initialArray.filter(el => typeof el === "string" && el !== "");
    }

    let arr1 = [2, "string", 3, "", "test"];
    let arr2 = ["hi", null, 5, "bye"];
    let output = `
      [${arr1}] → [${filterArray(arr1)}]<br>
      [${arr2}] → [${filterArray(arr2)}]
    `;
    document.getElementById("result-task4-3").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function filterArray(initialArray) 
{
  return initialArray.filter(el => typeof el === "string" && el !== "");
}
  `;
}
