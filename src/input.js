export const create = () => {
  if (localStorage.getItem('todo') == null) {
    localStorage.setItem('todo', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('todo'));
};

const input = document.querySelector('.main');
export const mydata = () => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const totaltasks = create();
      const task = {
        check: true,
        des: document.querySelector('.main').value,
        index: totaltasks.length,
      };
      totaltasks.push(task);
      localStorage.setItem('todo', JSON.stringify(totaltasks));
    }
  });
};

export const display = () => {
  const inner = document.querySelector('.show');
  const totaltasks = create();
  for (let i = 0; i < totaltasks.length; i += 1) {
    inner.innerHTML += `
       <div class="container"> 
       <input type="checkbox" id="vehicle2" name="tasks" value="data">
       <input class="data-input" value= "${totaltasks[i].des}">
       <i class="fa-solid fa-ellipsis-vertical"></i>
       </div>
        `;
  }
};
