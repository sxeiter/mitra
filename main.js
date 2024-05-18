
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
