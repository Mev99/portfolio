import { gsap } from "./node_modules/gsap/all.js";

import { ScrollTrigger } from "./node_modules/gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "./node_modules/gsap/ScrollToPlugin.js";
import { EaselPlugin } from "./node_modules/gsap/EaselPlugin.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, EaselPlugin);

// * CALL TO ACTION BUTTON SCROLL
const learn_more_button = document.querySelector('.learn_more')
const about_me = document.querySelector('.aboutme_div')
learn_more_button.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: about_me })
})

// * BANNER TWEENS
const tl_banner = gsap.timeline()
tl_banner
    // .from('.name', {duration: 1.5, x: -200, opacity: 0, delay: 0.3})
    // .from('.span', {duration: 1.5, y: -200, opacity: 0, delay: 0.1})
    .from('.mushroom_img', { duration: 2.5, x: 0, opacity: 0, delay: 1, ease: "bounce.inOut" })
    // .from('.learn_more', {duration: 1.5, y: 0, opacity: 0}, '<')

// * CONTACT ME ICONS MOVEMENT
const icons = document.querySelectorAll('.contact_icon_github, .contact_icon_linkedin, .contact_icon_email, .contact_icon_spotify, .contact_icon_discord, .clipboard')
icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        gsap.to(icon, { y: -10, duration: 0.5 })
    })

    icon.addEventListener('mouseout', () => {
        gsap.to(icon, { y: 0, duration: 0.5 })
    })
})

const clipboard = document.querySelector('.clipboard')
const copy = text => navigator.clipboard.writeText(text)
clipboard.addEventListener('click', () => {
    copy('matiasayesa99@outlook.com')
    
} )