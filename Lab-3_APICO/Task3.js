export function renderTask() 
{
  return `
    <div class="task-card task-expanded">
      <h2>Завдання 3. Переписування if → switch</h2>
      <p>
        Перепишіть конструкцію <code>if</code> на <code>switch</code>.
      </p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task3-3">Виконати завдання</button>
      <div id="result-task3-3" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task3-3").addEventListener("click", () => 
   {
    let results = [];
    function testSwitch(a) 
    {
      switch (a) {
        case 0: return 0;
        case 1: return 1;
        case 2:
        case 3: return "2,3";
        default: return "інше";
      }
    }

    results.push(`a=0 → ${testSwitch(0)}`);
    results.push(`a=1 → ${testSwitch(1)}`);
    results.push(`a=2 → ${testSwitch(2)}`);
    results.push(`a=3 → ${testSwitch(3)}`);
    results.push(`a=5 → ${testSwitch(5)}`);

    document.getElementById("result-task3-3").innerHTML = results.join("<br>");
  });
}

export function getCode() 
{
  return `
switch (a) 
{
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
}
  `;
}
