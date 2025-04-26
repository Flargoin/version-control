import {createList} from './task';

describe('Тестирование добавления параграфов', () => {
  let el, input, button;

  beforeEach(() => {
    el = document.createElement('div');
    el.id='app';
    createList(el);
    input = el.querySelector('.input');
    button = el.querySelector('.btn');
  });

  function setInputValue(val) {
    input.value = val;
    input.dispatchEvent(new Event('input'));
  }
  function isButtonVisible() {
    return !button.hidden;
  }
  function getParagraphs() {
    return [... el.querySelectorAll('p')].map(el => el.innerHTML);
  }

  it('Есть кнопка и инпут', () => {
    expect(input).not.toBe(null);
    expect(button).not.toBe(null);
    expect(button.innerHTML).toBe('Create Paragraph');
  })

  it('Кнопка скрывается или показывается в зависимости от наличия текста в инпуте', () => {
    expect(isButtonVisible()).toBe(false);
    setInputValue('Lorem ipsum');
    expect(isButtonVisible()).toBe(true);
    setInputValue('');
    expect(isButtonVisible()).toBe(false);
  })

  it('при нажатии на кнопку появляется параграф с текстом', () => {
    setInputValue('111');
    button.click();
    expect(getParagraphs()).toEqual(['111']);

    setInputValue('321');
    button.click();
    expect(getParagraphs()).toEqual(['321', '111']);

    setInputValue('777');
    button.click();
    expect(getParagraphs()).toEqual(['777', '321', '111']);
  })

  it('если параграфов уже 5, то первый добавленный параграф удаляется', () => {
    setInputValue('111');
    button.click();

    setInputValue('222');
    button.click();

    setInputValue('333');
    button.click();

    setInputValue('444');
    button.click();

    setInputValue('555');
    button.click();

    expect(getParagraphs()).toEqual(['555', '444', '333', '222', '111']);

    setInputValue('666');
    button.click();
    expect(getParagraphs()).toEqual(['666', '555', '444', '333', '222']);

    setInputValue('260');
    button.click();
    expect(getParagraphs()).toEqual(['260', '666', '555', '444', '333']);
  })

  it('после добавления параграфа, поле ввода очищается и кнопка скрывается', () => {
    setInputValue('111');
    button.click();
    expect(input.value).toBe('');
    expect(isButtonVisible()).toBe(false);
  })
});