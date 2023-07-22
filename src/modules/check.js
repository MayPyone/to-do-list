import {
  create,
} from './input.js';

export const check = () => {
  const totaltasks = create();
  document.querySelector('.show').addEventListener('change', (e) => {
    const button = e.target;
    const num = Number(button.id);
    const che = document.querySelector(`.checkbox${num}`);
    if (e.target.tagName === 'INPUT') {
      if (che.checked === true) {
        document.querySelector(`.me${num}`).style.textDecoration = 'line-through';
        totaltasks[num].completed = true;
        localStorage.setItem('lists', JSON.stringify(totaltasks));
      }
      if (che.checked === false) {
        document.querySelector(`.me${num}`).style.textDecoration = 'none';
        totaltasks[num].completed = false;

        localStorage.setItem('lists', JSON.stringify(totaltasks));
      }
    }
  });
};

export const headColor = () => {
  document.querySelector('h1').style.color = 'black';
};