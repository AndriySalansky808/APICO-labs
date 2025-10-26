export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 1. Унікальні значення масиву</h2>
      <p>Напишіть функцію, яка приймає масив чисел або рядків і повертає новий масив з унікальними значеннями.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task4-1">Виконати завдання</button>
      <div id="result-task4-1" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task4-1").addEventListener("click", () => 
    {
    function unicFn(initialArray) 
    {
      return [...new Set(initialArray)];
    }

    let arr1 = [2, 3, 1, 3, 3, 7];
    let arr2 = ["a", "b", "a", "c"];
    let output = `
      [${arr1}] → [${unicFn(arr1)}]<br>
      [${arr2}] → [${unicFn(arr2)}]
    `;
    document.getElementById("result-task4-1").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function unicFn(initialArray) 
{
  return [...new Set(initialArray)];
}
  `;
}
