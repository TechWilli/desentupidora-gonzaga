const backToTopButton = document.querySelector('.scroll-to-top-button');
const whatsappHref = document.querySelectorAll('.whatsapp-send-message');
// const whatsappHrefDDD011 = document.querySelector('.whatsapp-send-message-ddd-11');
// const whatsappHrefDDD013 = document.querySelector('.whatsapp-send-message-ddd-13');
const whatsappHrefDDD019 = document.querySelector('.whatsapp-send-message-ddd-19');
const whatsappHrefDDD019Floating = document.querySelector('.whatsapp-send-message-ddd-19-floating');

const callModal = document.querySelector('.call-modal-ddd-choice');
const messageModal = document.querySelector('.message-modal-ddd-choice');
const modalOverlay = document.querySelector('.modal-overlay');

const closeModal = document.querySelectorAll('.close-modal');

function addWhatsAppHref() {
  // console.log('whatsappHref', whatsappHref)
  const messageToSend = 'Olá, vim pelo site http://desentupidoragonzaga.com.br. Preciso de mais informações sobre!';
  // whatsappHref[0].href = `https://api.whatsapp.com/send?phone=numero_aqui&text=${encodeURI(messageToSend)}`;
  // whatsappHref[1].href = `https://api.whatsapp.com/send?phone=numero_aqui&text=${encodeURI(messageToSend)}`;

  // whatsappHrefDDD011.href = `https://api.whatsapp.com/send?phone=5511964684617&text=${encodeURI(messageToSend)}`;
  // whatsappHrefDDD013.href = `https://api.whatsapp.com/send?phone=5513991704074&text=${encodeURI(messageToSend)}`;
  whatsappHrefDDD019.href = `https://api.whatsapp.com/send?phone=5519983299887&text=${encodeURI(messageToSend)}`;
  whatsappHrefDDD019Floating.href = `https://api.whatsapp.com/send?phone=5519983299887&text=${encodeURI(messageToSend)}`;
}

function handleShowMessageModal() {
  document.body.style.overflow = 'hidden';

  messageModal.classList.toggle('show-modal');
  modalOverlay.classList.toggle('show-modal');

}

function handleShowCallModal() {
  document.body.style.overflow = 'hidden';

  callModal.classList.toggle('show-modal');
  modalOverlay.classList.toggle('show-modal');
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function handleCloseModal() {
  callModal.classList.remove('show-modal');
  messageModal.classList.remove('show-modal');
  modalOverlay.classList.remove('show-modal');

  document.body.style.overflow = 'auto';
}

backToTopButton.addEventListener('click', goToTop);

closeModal[0].addEventListener('click', handleCloseModal);
closeModal[1].addEventListener('click', handleCloseModal);

window.onload = () => {
  addWhatsAppHref();
}
