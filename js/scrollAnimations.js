const imgLoadedInfo = [];

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
});

function initAnimations(){
    worksAnimation();
    galleryTransition();
    galleryActivator();
}

function worksAnimation(){
    const worksBackgroundText = document.querySelector('.works-background-text-container')

    gsap.to('.works-background-text', {
        scrollTrigger: {
            trigger: '.works-container',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
        },
        transform: `translateY(-${(worksBackgroundText.offsetHeight - window.innerHeight) / 2}px)`
    })
}


function galleryTransition() {
    gsap.to('.who-i-am-overflow-container', {
        scrollTrigger: {
            trigger: '.who-i-am-overflow-container',
            start: 'bottom 90%',
            end: 'top top',
            scrub: 1,

        },
        width: '120vw'
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
}

function galleryActivator() {
    const imgs = Array.from(document.querySelectorAll('.who-i-am-img'));
    imgs.forEach(img => imgLoadedInfo.push({id: img.id, loaded: false}));
    imgs.forEach(img => img.complete ? handleImageLoad(img) : img.addEventListener('load', () => handleImageLoad(img)));
}

function handleImageLoad(img) {
    imgLoadedInfo.find(info => info.id == img.id).loaded = true;
    !imgLoadedInfo.some(img => !img.loaded) &&  galleryAnimation();
}

function galleryAnimation(){
    const galleryBackgroundText = document.querySelector('.who-i-am-background-text')
    const galleryContainer = document.querySelector('.who-i-am-photography-container')

    gsap.to('.who-i-am-background-text', {
        scrollTrigger: {
            trigger: '.who-i-am-frame',
            start: `${window.innerHeight * 2}px bottom`,
            end: 'bottom bottom',
            scrub: 1,
        },
        transform: `translate(-${galleryBackgroundText.offsetWidth - window.innerWidth}px, -50%)`
    });

    gsap.to('.who-i-am-photography-container', {
        scrollTrigger: {
            trigger: '.who-i-am-frame',
            start: `${window.innerHeight * 2}px bottom`,
            end: 'bottom bottom',
            scrub: 1,
        },
        transform: `translate(-${galleryContainer.offsetWidth - window.innerWidth}px)`
    });
}