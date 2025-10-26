export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 1. Контекст у методах об'єкта</h2>
      <p>Створи об'єкт user з методом greet() та виправ контекст через <code>bind()</code>.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="run-task6-1">Запустити</button>
      <div id="result-task6-1" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("run-task6-1").addEventListener("click", () => {
    const user = 
    {
      name: "Андрій",
      age: 19,
      greet() {
        return `Привіт, мене звати ${this.name} і мені ${this.age} років.`;
      }
    };

    const greetUser = user.greet;
    const fixedGreet = greetUser.bind(user);

    const res = fixedGreet();
    console.log(res);
    document.getElementById("result-task6-1").textContent = res;
  });
}

export function getCode() 
{
  return `
const user = 
{
  name: "Андрій",
  age: 19,
  greet() 
  {
    return \`Привіт, мене звати \${this.name} і мені \${this.age} років.\`;
  },
};

const greetUser = user.greet;
const fixedGreet = greetUser.bind(user);

fixedGreet(); // Привіт, мене звати Андрій і мені 19 років.
  `.trim();
}
