export function renderTask() 
{
  return `
    <div class="task-card">
      <h2>Завдання 1</h2>
      <p>
        Функція приймає значення будь-якого типу.<br>
        Якщо це число – вивести усі степені двійки, які не більші за нього.<br>
        Якщо не число – повідомлення <b>"incorrect type"</b>.
      </p>
      <button id="run-task2-1">Виконати завдання</button>
      <div id="result-task2-1" class="task-result"></div>
      <h3>Код рішення:</h3>
      <pre class="task-code"><code>${getCode()}</code></pre>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task2-1").addEventListener("click", () => 
  {
    function printPowsOf2(number) 
    {
      if (typeof number !== "number") 
      {
        return "incorrect type";
      }
      let result = [];
      let value = 1;
      while (value <= number) 
      {
        result.push(value);
        value *= 2;
      }
      return result.join(", ");
    }

    let output = `
      60 → ${printPowsOf2(60)}<br>
      64 → ${printPowsOf2(64)}<br>
      "32" → ${printPowsOf2("32")}<br>
      128 → ${printPowsOf2(128)}
    `;

    document.getElementById("result-task2-1").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function printPowsOf2(number) 
{
  if (typeof number !== "number") 
  {
    return "incorrect type";
  }
  let result = [];
  let value = 1;
  while (value <= number) 
  {
    result.push(value);
    value *= 2;
  }
  return result.join(", ");
}
  `.trim();
}