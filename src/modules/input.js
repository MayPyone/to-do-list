export const create = () => {
  if (localStorage.getItem('lists') == null) {
    localStorage.setItem('lists', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('lists'));
};

const input = document.querySelector('.main');
export const mydata = () => {
  input.addEventListener('keypress', (e) => {
    const totaltasks = create();
    if (e.key === 'Enter') {
      const l = totaltasks.length;
      const task = {
        description: document.querySelector('.main').value,
        completed: false,
        index: l + 1,
      };
      totaltasks.push(task);
      localStorage.setItem('lists', JSON.stringify(totaltasks));
    }
  });
};
const inner = document.querySelector('.show');
export const display = () => {
  inner.innerHTML = '';
  const totaltasks = create();
  for (let i = 0; i < totaltasks.length; i += 1) {
    inner.innerHTML += `
       <div class="container" id='con${i}'> 
       <div>
       <input id="${i}" class='checkbox${i}' type="checkbox" ${totaltasks[i].completed ? 'checked' : ' '}/>
      <span id ='iddes' class="des${i}"> 
      <input id='in${i}' class='me${i}' readonly type="text" value="${totaltasks[i].description}"></input>
      </span></div>
     <span id="icon${i}" > <i class="fa-solid fa-ellipsis-vertical" id="${i}"></i></span>
       </div>
        `;
    if (totaltasks[i].completed) {
      document.querySelector(`.me${i}`).style.textDecoration = 'line-through';
    }
  }
};

export const remove = (e) => {
  const totaltasks = create();
  totaltasks.splice(e, 1);
  if (totaltasks.length > 0) {
    for (let i = 0; i < totaltasks.length; i += 1) {
      totaltasks[i].index = i + 1;
    }
  }
  localStorage.setItem('lists', JSON.stringify(totaltasks));
  document.querySelector('.show').innerHTML = '';
};

export const clear = () => {
  const submit = document.querySelector('.mysubmit');
  submit.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const totaltasks = create();
      const obj = totaltasks.filter((task) => task.completed === false);
      for (let i = 0; i < obj.length; i += 1) {
        obj[i].index = i + 1;
      }
      localStorage.setItem('lists', JSON.stringify(obj));
    }
  });
};

export const deleteData = () => {
  document.querySelector('.show').addEventListener('click', (e) => {
    const button = e.target;
    const num = Number(button.id);
    if (e.target.tagName === 'I') {
      if (button.className === 'fa-solid fa-ellipsis-vertical') {
        const totaltasks = create();
        document.getElementById(`icon${num}`).innerHTML = `<i class="fa-solid fa-trash-can" id=${num}></i>`;
        const icon = document.getElementById(`icon${num}`);

        document.getElementById(`con${num}`).style.backgroundColor = 'pink';
        document.getElementById(`in${num}`).style.backgroundColor = 'pink';
        document.getElementById(`in${num}`).removeAttribute('readonly');
        const users = document.getElementById(`in${num}`);
        const input = document.querySelector('.show');
        input.addEventListener('keypress', (e) => {
          const totaltasks = create();
          if (e.key === 'Enter') {
            totaltasks[num].description = users.value;
            localStorage.setItem('lists', JSON.stringify(totaltasks));
          }
        });
      }
      if (button.className === 'fa-solid fa-trash-can') {
        document.querySelector('.show').innerHTML = ' ';
        remove(num);
        display();
      }
    }
  });
};
