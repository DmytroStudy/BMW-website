let message= document.querySelector('.WorldUp');
message.textContent ='Sing Up';

let form = document.querySelector('.modal-content');
let email = document.querySelector('.www#');
form.onsubmit = function(evt) {
  
  message.textContent ='Email ' + email.value + ' has been subscribed';
  evt.preventDefault();
};
