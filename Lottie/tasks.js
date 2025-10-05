// Завантаження окремого завдання (ЛР1)
function loadTask(n) 
{
  const container = document.getElementById("task-container");
  container.innerHTML = ""; // очистка

  if (n === 1) 
  {
    import("./../Lab-1_APICO/Task1.js")
      .then(module => 
      {
        container.innerHTML = module.renderTask();
        module.initTask();
      })
      .catch(err => 
      {
        container.innerHTML = "<p>Помилка завантаження завдання 1</p>";
        console.error(err);
      });
  }

  if (n === 2) {
    container.innerHTML = "<h2>Завдання 2</h2><p>Тут буде інше завдання...</p>";
  }
}

// Завантаження ЛР2 з плитками
function loadLab2() 
{
  const container = document.getElementById("task-container");
  container.innerHTML = `
    <div class="tasks-grid lab2-grid">
      <div class="task-tile" data-task="1">Завдання 1</div>
      <div class="task-tile" data-task="2">Завдання 2</div>
      <div class="task-tile" data-task="3">Завдання 3</div>
      <div class="task-tile" data-task="4">Завдання 4</div>
    </div>
  `;

  document.querySelectorAll(".task-tile").forEach(tile => 
  {
    tile.addEventListener("click", () => expandTask(tile));
  });
}

function expandTask(tile) 
{
  const taskNumber = tile.dataset.task;

  if (tile.classList.contains("expanded")) 
  {
    tile.classList.remove("expanded");
    tile.innerHTML = `Завдання ${taskNumber}`;
    return;
  }

  document.querySelectorAll(".task-tile").forEach(t => 
  {
    t.classList.remove("expanded");
    t.innerHTML = `Завдання ${t.dataset.task}`;
  });

  tile.classList.add("expanded");

  import(`./../Lab-2_APICO/Task${taskNumber}.js`)
  .then(module => 
  {
    tile.innerHTML = module.renderTask();
    module.initTask();

    // ⛔ Захист від закриття плитки при кліку на кнопку
    tile.querySelectorAll("button").forEach(btn => 
    {
      btn.addEventListener("click", e => e.stopPropagation());
    });
  })
  .catch(err => 
  {
    tile.innerHTML = `<p>Помилка завантаження завдання ${taskNumber}</p>`;
    console.error(err);
  });

}

// Завантаження ЛР3

function loadLab3() 
{
  const container = document.getElementById("task-container");
  container.innerHTML = `
    <div class="tasks-grid lab3-grid">
      <div class="task-tile" data-task="1">Завдання 1</div>
      <div class="task-tile" data-task="2">Завдання 2</div>
      <div class="task-tile" data-task="3">Завдання 3</div>
      <div class="task-tile" data-task="4">Завдання 4</div>
      <div class="task-tile" data-task="5">Завдання 5</div>
      <div class="task-tile" data-task="6">Завдання 6</div>
    </div>
  `;

  document.querySelectorAll(".task-tile").forEach(tile => 
  {
    tile.addEventListener("click", () => expandTaskLab3(tile));
  });
}

function expandTaskLab3(tile) 
{
  const taskNumber = tile.dataset.task;

  if (tile.classList.contains("expanded")) 
  {
    tile.classList.remove("expanded");
    tile.innerHTML = `Завдання ${taskNumber}`;
    return;
  }

  document.querySelectorAll(".task-tile").forEach(t => 
  {
    t.classList.remove("expanded");
    t.innerHTML = `Завдання ${t.dataset.task}`;
  });

  tile.classList.add("expanded");

  import(`./../Lab-3_APICO/Task${taskNumber}.js`)
    .then(module => 
    {
      tile.innerHTML = module.renderTask();
      module.initTask();

      // ⛔ Захист від закриття плитки при кліку на кнопку
      tile.querySelectorAll("button").forEach(btn => 
      {
        btn.addEventListener("click", e => e.stopPropagation());
      });
    })
    .catch(err => 
    {
      tile.innerHTML = `<p>Помилка завантаження завдання ${taskNumber}</p>`;
      console.error(err);
    });
}

