const body = document.querySelector('.body')
let sections = document.querySelectorAll('.section')
const navigation = document.querySelector('.navbar')
const navScreen = document.querySelector('.nav-screen')
const navLinkMobile = document.querySelectorAll('.nav-link-mobile')
const links = document.querySelectorAll('.nav-link')
const burgerBtn = document.querySelector('.burger')
const burgerExitBtn = document.querySelector('.burger-exit')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const footerYear = document.querySelector('.year')

document.addEventListener('DOMContentLoaded', function(){
	const nav = document.querySelector('.navbar')

	function addShadow(){
		if (window.scrollY >= 300){
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	window.addEventListener('scroll', addShadow)
})

const showNav = () => {
	navScreen.classList.toggle('custom-active')
	body.classList.toggle('stop-scrolling')
	first.classList.toggle('rotate-bar-first')
	second.classList.toggle('rotate-bar-second')
	third.classList.toggle('rotate-bar-third')
}

navLinkMobile.forEach(btn => {
	btn.addEventListener('click', showNav)
})

const handleCurrenYear = () => {
	const year = new Date().getFullYear()

	footerYear.innerText = year
}

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 300;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			links.forEach(link => {
				link.classList.remove('active-state')
				document.querySelector('.nav-link[href*=' + id + ']').classList.add('active-state')
	
			})
		}
	})
}




handleCurrenYear()
burgerBtn.addEventListener('click', showNav)
