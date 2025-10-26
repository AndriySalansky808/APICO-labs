export function renderTask() 
{
  return `
    <div class="task-expanded">
      <h2>Завдання 2. Банківський рахунок</h2>
      <p>createBankAccount(initialBalance) → повертає об’єкт з методами deposit(amount), withdraw(amount), getBalance(). Баланс має бути приватним.</p>
      <pre class="task-code">${getCode()}</pre>
      <button id="btn-run-task2">Запустити</button>
      <div id="result-task4-2" class="task-result"></div>
    </div>
  `;
}

export function initTask() 
{
  document.getElementById("btn-run-task2").addEventListener("click", () => {
    function createBankAccount(initialBalance) 
    {
      let balance = initialBalance;

      return {
        deposit(amount) 
        {
          balance += amount;
          console.log(`💰 Поповнення: +${amount}. Баланс: ${balance}`);
        },
        withdraw(amount) 
        {
          if (amount > balance) 
          {
            console.log("⛔ Недостатньо коштів!");
            return;
          }
          balance -= amount;
          console.log(`💸 Знято: -${amount}. Баланс: ${balance}`);
        },
        getBalance() 
        {
          return balance;
        }
      };
    }

    const account = createBankAccount(100);
    account.deposit(50);
    account.withdraw(30);
    console.log("🔹 Поточний баланс:", account.getBalance());
    alert("Результат дивись у консолі (Ctrl + Shift + I)");
  });
}

export function getCode() {
  return `
function createBankAccount(initialBalance) 
{
  let balance = initialBalance;
  return 
  {
    deposit(amount) { balance += amount; return balance; },
    withdraw(amount) 
    {
      if (amount > balance) return { ok: false, message: "Недостатньо коштів" };
      balance -= amount;
      return { ok: true, balance };
    },
    getBalance() { return balance; }
  };
}
  `.trim();
}