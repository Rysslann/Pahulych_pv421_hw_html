function toggleMenu() {
	var menu = document.querySelector('.menu');
	var burger = document.querySelector('.burger-btn');
	menu.classList.toggle('menu__active');
	burger.classList.toggle('active');
}