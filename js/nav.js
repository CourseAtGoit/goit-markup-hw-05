(() => {
  const refs = {
    navLinks: document.querySelectorAll('[data-nav-link]'),
  };

  //   # присвоюэмо класс current на посилання яке було клікнуто і знімаємо його з інших посилань
  refs.navLinks.forEach(link => {
    link.addEventListener('click', event => {
      refs.navLinks.forEach(navLink => navLink.classList.remove('current'));
      event.currentTarget.classList.add('current');
    });
  });
})();
