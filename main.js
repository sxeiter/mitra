
  // Получаем элементы, с которыми будем взаимодействовать
  const modal = document.querySelector('.modal');
  const burger = document.querySelector('.burger');
  const closeModal = document.querySelector('.close-modal');
  const home = document.querySelector('.home');

  // Добавляем обработчик события клика по бургеру
  burger.addEventListener('click', function() {
    modal.style.display = 'block';
    home.style.display = 'none';
  });

  // Добавляем обработчик события клика по кнопке закрытия модального окна
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    home.style.display = 'block';
  });

  const helpBlock = document.querySelector('.services-block-help');

helpBlock.addEventListener('mouseover', function() {
  helpBlock.style.width = '300px';
  helpBlock.querySelector('.needhelp').style.display = 'none';
  helpBlock.querySelector('.close-bot').style.display = 'block';
});

helpBlock.addEventListener('mouseout', function() {
  helpBlock.style.width = '54px';
  helpBlock.querySelector('.needhelp').style.display = 'block';
  helpBlock.querySelector('.close-bot').style.display = 'none';
});