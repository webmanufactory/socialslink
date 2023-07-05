let input = document.querySelector('.phone');
document.querySelector('.button-input').addEventListener('click', () => {
  document.querySelector('.telegram__link').href = "https://t.me/" + (input.value[0] = '+7' + input.value.slice(1).replaceAll(/[^0-9\+]/g, ''));
  document.querySelector('.whatsapp__link').href = "https://wa.me/" + (input.value[0] = '+7' + input.value.slice(1).replaceAll(/[^0-9\+]/g, ''));
})
