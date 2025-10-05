export function renderTask() 
{
  return `
    <div class="task-card task-expanded">
      <h2>Завдання 6. Власна імплементація Array.join()</h2>
      <p>
        Реалізуйте функцію <code>myJoin(arr, separator)</code>.
      </p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task3-6">Виконати завдання</button>
      <div id="result-task3-6" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task3-6").addEventListener("click", () => 
    {
    function myJoin(arr, separator = ",") 
    {
      let result = "";
      for (let i = 0; i < arr.length; i++) 
        {
        result += arr[i];
        if (i < arr.length - 1) result += separator;
      }
      return result;
    }

    let output = `
      [1,2,3] "-" → ${myJoin([1,2,3], "-")}<br>
      ["Hello","world"] " " → ${myJoin(["Hello","world"], " ")}<br>
      ["a","b","c"] default → ${myJoin(["a","b","c"])}
    `;
    document.getElementById("result-task3-6").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function myJoin(arr, separator = ",") 
{
  let result = "";
  for (let i = 0; i < arr.length; i++) 
  {
    result += arr[i];
    if (i < arr.length - 1) result += separator;
  }
  return result;
}
  `;
}
