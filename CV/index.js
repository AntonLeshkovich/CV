const menu = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__menu__icon');

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
    menu.querySelectorAll('.header__item-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}


const progressTextElements = document.querySelectorAll('.circle__progress-text');

progressTextElements.forEach((textElement) => {
  const endPercentage = parseInt(textElement.textContent, 10);

  let currentPercentage = 0;

  const animationInterval = setInterval(() => {
    if (currentPercentage >= endPercentage) {
      clearInterval(animationInterval);
    } else {
      currentPercentage += 1;
      textElement.textContent = `${currentPercentage}%`;
    }
  }, 30);
});

