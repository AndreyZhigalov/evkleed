"use strict"

const burgerButton = document.querySelector(".header__burger")
const navbar = document.querySelector(".header__navbar")
const navbarList = document.querySelector(".header__navbar-list")
const searchBlock = document.querySelector('.header__search-container')
const searchButton = document.querySelector('.header__search')
const searchInput = document.querySelector('.search-container__input')
const logo = document.querySelector('.header__logo')

const articleHeader = document.querySelector('.how-work__article-header')
const articleDescription = document.querySelector('.how-work__article-description')
const articleImage = document.querySelector('.how-work__article-img')

if(window.innerWidth <= 1200) {
    navbar.classList.toggle("active")
}

// MENU TOGGLER
function toggleMenu() {
    navbar.classList.toggle("active")
}

function toggleSearch() {

    searchBlock.classList.toggle("activeFlex")
    searchButton.classList.toggle("active")
    searchInput.value = ""
    searchInput.focus()

    if (window.innerWidth >= 1440 && window.innerWidth < 1700) {
        navbarList.classList.toggle("nav-gap")
    } else if (window.innerWidth < 1440 && window.innerWidth > 1200) {
        navbar.classList.toggle("active")
    } else if (window.innerWidth < 992 && window.innerWidth > 576) {
        logo.classList.toggle("activeFlex")
    }
}

function slider(id) {
    const heroBG = document.querySelector('.hero__background')
    if (id === "hero-1") {
        heroBG.style.transform = `translateX(0%)`
    }
    if (id === "hero-2") {
        heroBG.style.transform = `translateX(-100%)`
    }
    if (id === "hero-3") {
        heroBG.style.transform = `translateX(-200%)`
    }
}

function changeArticle(event) {
    const step = event.target.dataset.step
    const steps = document.querySelectorAll(`.how-work__step`)
    const articles = document.querySelectorAll(`.how-work__article`)
    const images = document.querySelectorAll(`.how-work__article-img`)

    steps.forEach(step => step.classList.remove("active"))
    articles.forEach(article => article.classList.remove("active"))
    images.forEach(img => img.classList.remove("active"))

    document.querySelector(`[data-step="${step}"]`).classList.add("active");
    document.querySelector(`[data-step-article="${step}"]`).classList.add("active");
    document.querySelector(`[data-step-img="${step}"]`).classList.add("active");
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

});