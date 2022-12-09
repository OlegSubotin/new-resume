const TOKEN = '5840903257:AAEzCTGVEQCC9o-FDihl1BLBJyIcYTr99XU';
const CHATID = '-817443071';
const formEl = document.querySelector('.js-form');
const popupEl = document.getElementById('popup');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  let formItems = e.currentTarget.elements;
  let name = formItems.name.value;
  let subject = formItems.subject.value;
  let phone = formItems.phone.value;
  let mail = formItems.mail.value;
  let message = formItems.message.value;
  let user = { name, subject, phone, mail, message };

  let url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHATID}&text=NAME:${user.name};   SUBJECT:${user.subject};    PHONE:${user.phone};    MAIL:${user.mail};    MESSAGE:${user.message}`;
  fetch(url);
  formEl.reset();
  popupEl.classList.remove('is-hidden');
  window.setTimeout(hidePopup, 2000);
}

function hidePopup() {
  popupEl.classList.add('is-hidden');
}
