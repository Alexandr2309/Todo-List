export function startEdit(e) {
  let textNow = e.target.textContent
  e.target.style.display = 'none';
  let inp = e.target.nextElementSibling;
  inp.onblur = (e) => {
    const mainElem = e.target.previousElementSibling
    mainElem.textContent = textNow;
    e.target.value = '';
    e.target.style.display = 'none';
    mainElem.style.display = 'block';
  }
  inp.style.display = 'block';
  inp.value = textNow;
  inp.focus();
}
export function endEdit(e) {
  if (e.key === 'Enter') {
    e.target.onblur = '';
    const mainElem = e.target.previousElementSibling
    mainElem.textContent = e.target.value;
    e.target.style.display = 'none';
    mainElem.style.display = 'block';
  }
}


