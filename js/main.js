let input = document.querySelector('.phone');
document.querySelector('.button-input').addEventListener('click', () => {
  if (input.value[0] == "+7") {
    document.querySelector('.telegram__link').href = "https://t.me/" + input.value.replaceAll(/[^0-9\+]/g, '');
    document.querySelector('.whatsapp__link').href = "https://wa.me/" + input.value.replaceAll(/[^0-9\+]/g, '');
  } else if (input.value[0] == "+") {
    document.querySelector('.telegram__link').href = "https://t.me/" + input.value.replaceAll(/[^0-9\+]/g, '');
    document.querySelector('.whatsapp__link').href = "https://wa.me/" + input.value.replaceAll(/[^0-9\+]/g, '');
  } else {
    document.querySelector('.telegram__link').href = "https://t.me/" + (input.value[0] = '+7' + input.value.slice(1).replaceAll(/[^0-9\+]/g, ''));
    document.querySelector('.whatsapp__link').href = "https://wa.me/" + (input.value[0] = '+7' + input.value.slice(1).replaceAll(/[^0-9\+]/g, ''));
  }
  input.value = '';
})
