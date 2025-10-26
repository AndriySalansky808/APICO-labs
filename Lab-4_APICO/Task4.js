export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 4. Користувачі з Лондона старше 18</h2>
      <p>Поверніть імена користувачів, які живуть у місті "London" і старше 18 років.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task4-4">Виконати завдання</button>
      <div id="result-task4-4" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task4-4").addEventListener("click", () => 
  {
    function findUser(initialObject) 
    {
      return Object.keys(initialObject).filter(
        name => initialObject[name].city === "London" && initialObject[name].age > 18
      );
    }

    let users = 
    {
      Max: { age: 23, city: "London" },
      Mike: { age: 20, city: "NY" },
      Anna: { age: 17, city: "London" },
    };
    let output = `Вхідні дані: ${JSON.stringify(users)}<br>Результат: [${findUser(users)}]`;
    document.getElementById("result-task4-4").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function findUser(initialObject) 
{
  return Object.keys(initialObject).filter(
    name => initialObject[name].city === "London" && initialObject[name].age > 18
  );
}
  `;
}
