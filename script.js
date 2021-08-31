const burger = document.querySelector('.burger');

burger.addEventListener('click', (event) => {
  const header = document.querySelector('.header'),
    menuItems = document.querySelectorAll('.nav__item'),
    // logoHeader = document.getElementById('logo'),
    btnHeader = document.getElementById('btn-header'),
    // clickableItems = [...menuItems, logoHeader, btnHeader];
    clickableItems = [...menuItems, btnHeader];

  // SHOW & HIDE NAVIGATION 2 CLICK BURGER //
  header.classList.toggle('header_active');
  burger.classList.toggle('burger_active');

// // TOGGLE SCROLL //
const getScrollbarWidth = () => {
  const outer = document.createElement('div');

  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';

  document.body.appendChild(outer);
  const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);

  return scrollBarWidth;
}

const hideScroll = () => {
  const scrollWidth = `${getScrollbarWidth()}px`;

  document.body.style.paddingRight = scrollWidth;
  document.body.style.overflow = 'hidden';
  header.style.paddingRight = scrollWidth;
}
const showScroll = () => {
  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';
  header.style.paddingRight = '';
}

if (header.classList.contains('header_active')) {
  hideScroll();
} else {
  showScroll();
}

// ESCAPE SCROLL-TOGGLING, IF USER START TO RESIZE WINDOW //
const resetScrollToggle = () => {
  header.classList.remove('header_active');
  burger.classList.remove('burger_active');
  showScroll();
};

window.addEventListener('resize', resetScrollToggle);

// ESCAPE SCROLL-TOGGLING, IF USER CLICK FILL //
header.addEventListener('click', (e) => {
  if ((e.offsetX > header.offsetWidth) || (e.offsetY > header.offsetHeight)) {
    resetScrollToggle();
  }
});

// ESCAPE SCROLL-TOGGLING, IF USER CLICK ANY MENU-ITEM //
clickableItems.forEach(item => {
  item.addEventListener('click', resetScrollToggle);
});

})