// Получаем все слайды
const slides = document.querySelectorAll('.reliable');

// Получаем кнопки "Next" и "Prev"
const nextBtn = document.querySelector('.any_doubts_btn_next');
const prevBtn = document.querySelector('.any_doubts_btn_prev');

// Устанавливаем текущий индекс слайда
let currentIndex = 0;

// Обработчик клика на кнопку "Next"
nextBtn.addEventListener('click', () => {
  // Переходим к следующему слайду
  goToSlide(currentIndex + 1);
});

// Обработчик клика на кнопку "Prev"
prevBtn.addEventListener('click', () => {
  // Переходим к предыдущему слайду
  goToSlide(currentIndex - 1);
});

// Функция для перехода к указанному слайду
function goToSlide(index) {
  // Проверяем, выходит ли индекс за пределы количества слайдов
  if (index < 0) {
    index = slides.length - 1; // Переходим к последнему слайду
  } else if (index >= slides.length) {
    index = 0; // Переходим к первому слайду
  }
  
  // Скрываем все слайды
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Отображаем выбранный слайд
  slides[index].style.display = 'block';

  // Обновляем текущий индекс слайда
  currentIndex = index;
}
