export function renderTask() 
{
  return `
    <div class="task-card">
      <h2>Завдання 1</h2>
      <p>
        Створити об’єкт користувача на основі введених даних (ім’я, вік).<br>
        Якщо користувачеві менше 18 років — доступ заборонено, інакше — дозволено.
      </p>
      <button id="run-task1">Виконати завдання</button>
      <h3>Код рішення:</h3>
      <pre class="task-code">${GetCode()}</pre>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task1").addEventListener("click", () => {
    let userName = prompt("Введіть ваше ім’я:");
    let userAge = prompt("Введіть ваш вік:");

    let user = 
    {
      name: userName,
      age: Number(userAge),
    };

    if (user.age < 18) 
      {
      alert("Доступ заборонено!");
    } else {
      alert("Доступ дозволено!");
    }
  });
}

export function GetCode() 
{
  return `
function runTask1() 
{
  let userName = prompt("Введіть ваше ім’я:");
  let userAge = prompt("Введіть ваш вік:");

  let user = 
  {
    name: userName,
    age: Number(userAge),
  };

  if (user.age < 18) 
  {
    alert("Доступ заборонено!");
  } else {
    alert("Доступ дозволено!");
  }
}
  `;
}
