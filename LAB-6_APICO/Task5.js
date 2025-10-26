export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 5. Контекст та bind</h2>
      <p>Створи об'єкт counter і виправ контекст його методів за допомогою <code>bind()</code>.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task6-5">Запустити</button>
      <div id="result-task6-5" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task6-5").addEventListener("click", () => {
    const counter = 
    {
      count: 0,
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
      show() {
        return `Лічильник: ${this.count}`;
      }
    };

    const inc = counter.increment;
    
    const fixedInc = inc.bind(counter);

    fixedInc();
    fixedInc();
    const res = counter.show();
    console.log(res);
    document.getElementById("result-task6-5").textContent = res;
  });
}

export function getCode() 
{
  return `
const counter = 
{
  count: 0,
  increment() { this.count++; },
  decrement() { this.count--; },
  show() { return \`Лічильник: \${this.count}\`; }
};

const inc = counter.increment;
const fixedInc = inc.bind(counter);

fixedInc();
fixedInc();

counter.show(); // Лічильник: 2
  `.trim();
}
