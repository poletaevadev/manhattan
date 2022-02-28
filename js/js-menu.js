function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  btn.addEventListener("click", function () {
    this.classList.toggle(params.activeClass);

    if (
      !menu.classList.contains(params.activeClass) &&
      !menu.classList.contains(params.hiddenClass)
    ) {
      menu.classList.add(params.activeClass);
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add(params.hiddenClass);
      document.body.removeAttribute('style');
    }
  });
}

setBurger({
  btnClass: "header__burger", // класс бургера
  menuClass: "header__nav-wrap", // класс меню
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});

document.querySelectorAll('.nav__link').forEach(function(link){
  link.addEventListener('click', function(e){
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav-wrap');
    if (window.innerWidth <= 1024 )
    {
    menu.classList.add('is-closed');
    burger.classList.remove('is-opened');
    document.body.removeAttribute('style');
    }
  });
});
