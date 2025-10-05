export function renderTask() 
{
  return `
    <div class="task-card">
      <h2>Завдання 4</h2>
      <p>
        Функція приймає рядок з кількома словами і пробілами.<br>
        Потрібно порахувати кількість слів у рядку.
      </p>
      <button id="run-task2-4">Виконати завдання</button>
      <div id="result-task2-4" class="task-result"></div>
      <h3>Код рішення:</h3>
      <pre class="task-code"><code>${getCode()}</code></pre>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task2-4").addEventListener("click", () => 
  {
    function calculateWordsInString(string) 
    {
      return string.trim().split(/\s+/).length;
    }

    let output = `
      "Easy string for count" → ${calculateWordsInString("Easy string for count")}<br>
      "Easy" → ${calculateWordsInString("Easy")}<br>
      "Some string with a triple   space" → ${calculateWordsInString("Some string with a triple   space")}<br>
      "Some?  string, with a triple   space" → ${calculateWordsInString("Some?  string, with a triple   space")}
    `;

    document.getElementById("result-task2-4").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function calculateWordsInString(string) 
{
  return string.trim().split(/\\s+/).length;
}
  
  `.trim();
}