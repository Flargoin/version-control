const MAX_PARAGRAPH = 5;
let app = document.querySelector('#app');

export const createList = (el) => {
    el.innerHTML = `
        <div class="wrap">
            <input type="text" class="input">
            <button class="btn" hidden>Create Paragraph</button>
            <div class="list"></div>
        </div>
    `;

    const input = el.querySelector('.input');
    const button = el.querySelector('.btn');
    const list = el.querySelector('.list');

    input.addEventListener('input', () => {
      button.hidden = !input.value
    });

    button.addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = input.value;
      list.prepend(p);

      if(list.querySelectorAll('p').length > MAX_PARAGRAPH) {
        list.querySelectorAll("p")[MAX_PARAGRAPH].remove();
      }

      input.value = '';
      button.hidden = true;
    })
}

document.addEventListener('DOMContentLoaded', () => {
    createList(app)
})