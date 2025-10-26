export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 5. Видалити об'єкти з певним ключем і значенням</h2>
      <p>Функція приймає масив об’єктів, назву ключа та значення — і видаляє об’єкти, які мають це значення.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task4-5">Виконати завдання</button>
      <div id="result-task4-5" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task4-5").addEventListener("click", () => 
  {
    function removeObj(arrayOfObj, keyName, value) 
    {
      return arrayOfObj.filter(obj => obj[keyName] !== value);
    }

    const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];

    let output = `
      Видаляємо age=2 → ${JSON.stringify(removeObj(arr, "age", 2))}<br>
      Видаляємо year=2 → ${JSON.stringify(removeObj(arr, "year", 2))}
    `;
    document.getElementById("result-task4-5").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function removeObj(arrayOfObj, keyName, value) 
{
  return arrayOfObj.filter(obj => obj[keyName] !== value);
}
  `;
}
