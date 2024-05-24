document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const txt = document.querySelector('.who-i-am-background-text')
        const gallery = document.querySelector('.who-i-am-photography-container')
        const worksText = document.querySelector('.works-background-text-container')

        gsap.to('.works-background-text', {
            scrollTrigger: {
                trigger: '.works-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
            transform: `translateY(-${(worksText.offsetHeight - window.innerHeight) / 2}px)`
        })

        gsap.to('.who-i-am-overflow-container', {
            scrollTrigger: {
                trigger: '.who-i-am-overflow-container',
                start: 'bottom 90%',
                end: 'top top',
                scrub: 1,

            },
            width: '115vw'
        });

        gsap.to('.who-i-am-content', {
            scrollTrigger: {
                trigger: '.who-i-am-content',
                start: 'top 20%',
                end: 'top top',
                scrub: 1,
            },
            opacity: 1, 
        });

        

        gsap.to('.who-i-am-background-text', {
            scrollTrigger: {
                trigger: '.who-i-am-frame',
                start: `${window.innerHeight * 2}px bottom`,
                end: 'bottom bottom',
                scrub: 1,
            },
            transform: `translate(-${txt.offsetWidth - window.innerWidth}px, -50%)`
        });

        gsap.to('.who-i-am-photography-container', {
            scrollTrigger: {
                trigger: '.who-i-am-frame',
                start: `${window.innerHeight * 2}px bottom`,
                end: 'bottom bottom',
                scrub: 1,
            },
            transform: `translate(-${gallery.offsetWidth - window.innerWidth}px)`
        });
    }, 100);


})