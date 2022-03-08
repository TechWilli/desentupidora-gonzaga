const backToTopButton = document.querySelector('.scroll-to-top-button');
const whatsappHref = document.querySelectorAll('.whatsapp-send-message');

function addWhatsAppHref() {
  // console.log('whatsappHref', whatsappHref)
  const messageToSend = 'Olá, vim pelo site site_aqui. Preciso de mais informações sobre!';
  whatsappHref[0].href = `https://api.whatsapp.com/send?phone=numero_aqui&text=${encodeURI(messageToSend)}`;
  whatsappHref[1].href = `https://api.whatsapp.com/send?phone=numero_aqui&text=${encodeURI(messageToSend)}`;
}

function handleWhatsappClick() {
  whatsappHref[1].click();
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

backToTopButton.addEventListener('click', goToTop);

window.onload = () => {
  addWhatsAppHref();
}