document.addEventListener('DOMContentLoaded', () => {
    gsap.to('.works-background-text', {
        scrollTrigger: {
            trigger: '.works-container',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
        },
        transform: 'translateY(-20vh)'
    })
})