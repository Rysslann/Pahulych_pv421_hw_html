function toggleMenu() {
	var burger = document.querySelector('.menu__icon');
  var menu = document.querySelector('.menu__items');
	menu.classList.toggle('_active');
  burger.classList.toggle('_active');
}