// * CALL TO ACTION BUTTON SCROLL
const learn_more_button = document.querySelector('.learn_more')
const about_me = document.querySelector('.aboutme_div')
learn_more_button.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: about_me })
})

// * BANNER TWEENS
// const tl_banner = gsap.timeline()
// tl_banner
gsap.to('.test', { duration: 1.6, x: 0, opacity: 1, delay: 0, ease: "bounce.inOut" })

// * CONTACT ME ICONS MOVEMENT
const icons = document.querySelectorAll('.contact_icon_github, .contact_icon_linkedin, .contact_icon_email, .contact_icon_spotify, .contact_icon_discord')
icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        gsap.to(icon, { y: -10, duration: 0.5 })
    })

    icon.addEventListener('mouseout', () => {
        gsap.to(icon, { y: 0, duration: 0.5 })
    })
})

// * FOOTER MAIL, CLIPBOARD & DISCORD
const clipboard = document.querySelector('.clipboard')
const clipboard_all = document.querySelectorAll('.clipboard, .footer_a, .contact_icon_discord')
const copy = text => navigator.clipboard.writeText(text)

clipboard.addEventListener('mouseover', () => {
    gsap.to('.clipboard', { y: -2, duration: 0.2 })
})
clipboard.addEventListener('mouseout', () => {
    gsap.to('.clipboard', { y: 0, duration: 0.2 })
})

// * TOAST 
clipboard_all.forEach(e => {
    e.addEventListener('click', (event) => {
        if (event.target.classList.contains('fa-discord')) {
            copy('mev3720')
            const Toast = Swal.mixin({
                toast: true,
                position: "top-start",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                width: "auto",
                color: "rgb(153, 194, 77)",
                background: 'black',
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
                customClass: {
                    popup: 'swal2-show',
                    backdrop: 'swal2-backdrop-show',
                    icon: 'swal2-icon-show',
                    content: 'swal-content',
                    title: 'swal-content2'
                }
            });
            Toast.fire({
                iconHtml: '<i class="fa-regular fa-clipboard fa-2xs" style="color: #b3003e;"></i>',
                title: "discord tag copied to clipboard!"
            });
            
        } else {
            console.log(event.target)
            copy('matiasayesa99@outlook.com')
            const Toast = Swal.mixin({
                toast: true,
                position: "top-start",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                width: "auto",
                color: "rgb(153, 194, 77)",
                background: 'black',
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
                customClass: {
                    popup: 'swal2-show',
                    backdrop: 'swal2-backdrop-show',
                    icon: 'swal2-icon-show',
                    content: 'swal-content',
                    title: 'swal-content2'
                }
            });
            Toast.fire({
                iconHtml: '<i class="fa-regular fa-clipboard fa-2xs" style="color: #b3003e;"></i>',
                title: "Email copied to clipboard!"
            });
        }

    })
});