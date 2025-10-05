export function renderTask() 
{
  return `
    <div class="task-card">
      <h2>Завдання 3</h2>
      <p>
        Функція приймає назву місяця (англійською, великими літерами)<br>
        і повертає пору року: <b>spring, summer, autumn, winter</b>.
      </p>
      <button id="run-task2-3">Виконати завдання</button>
      <div id="result-task2-3" class="task-result"></div>
      h3>Код рішення:</h3>
      <pre class="task-code"><code>${getCode()}</code></pre>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task2-3").addEventListener("click", () => 
    {
    function printSeasonByMonth(month) 
    {
      const seasons = 
      {
        winter: ["DECEMBER", "JANUARY", "FEBRUARY"],
        spring: ["MARCH", "APRIL", "MAY"],
        summer: ["JUNE", "JULY", "AUGUST"],
        autumn: ["SEPTEMBER", "OCTOBER", "NOVEMBER"]
      };

      for (let season in seasons)
        {
        if (seasons[season].includes(month)) 
        {
          return season;
        }
      }
      return "incorrect month";
    }

    let output = `
      SEPTEMBER → ${printSeasonByMonth("SEPTEMBER")}<br>
      NOVEMBER → ${printSeasonByMonth("NOVEMBER")}<br>
      JULY → ${printSeasonByMonth("JULY")}<br>
      APRIL → ${printSeasonByMonth("APRIL")}
    `;

    document.getElementById("result-task2-3").innerHTML = output;
  });
}

export function getCode() 
{
  return `
function printSeasonByMonth(month) 
{
  const seasons = 
  {
    winter: ["DECEMBER", "JANUARY", "FEBRUARY"],
    spring: ["MARCH", "APRIL", "MAY"],
    summer: ["JUNE", "JULY", "AUGUST"],
    autumn: ["SEPTEMBER", "OCTOBER", "NOVEMBER"]
  };

  for (let season in seasons) 
  {
    if (seasons[season].includes(month)) 
    {
      return season;
    }
  }
  return "incorrect month";
}
  `.trim();
}