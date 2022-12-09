const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.js-form');

initForm();

formEl.addEventListener('input', onFormInput);

function onFormInput(evt) {
  let persistedData = localStorage.getItem(STORAGE_KEY);
  persistedData = persistedData ? JSON.parse(persistedData) : {};
  persistedData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedData));
}

function initForm() {
  let savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    savedData = JSON.parse(savedData);
    console.log(savedData);
    Object.entries(savedData).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
