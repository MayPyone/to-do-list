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

const totaltasks = [
  {
    description: 'clean the room',
    completed: false,
    index: 1,
  },
  {
    description: 'do homework',
    completed: false,
    index: 2,
  },
];

export const display = () => {
  const inner = document.querySelector('.show');
  // const totaltasks = create();
  for (let i = 0; i < totaltasks.length; i += 1) {
    inner.innerHTML += `
       <div class="container"> 
       <div>
       <input class='checkbox' type="checkbox" ${totaltasks.completed ? 'checked' : ' '}/>
       ${totaltasks[i].description}</div>
       <i class="fa-solid fa-ellipsis-vertical"></i>
       </div>
        `;
  }
};
