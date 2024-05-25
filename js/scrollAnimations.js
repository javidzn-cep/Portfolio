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
    const worksBackgroundContainer = document.querySelector('.works-background-text-overflow')
    gsap.to('.works-background-text-overflow', {
        scrollTrigger: {
            trigger: '.works-container',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
        transform: `translate(${(-worksBackgroundContainer.offsetWidth/2)}px, ${(-worksBackgroundContainer.offsetHeight*0.75)}px)`
    })
}


function galleryTransition() {

    const galleryContainer = document.querySelector('.gallery-container')
    const hipo = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)) + 100
    galleryContainer.style.left = `${(hipo - window.innerWidth) / 2}px`

    gsap.to('.gallery-overflow-container', {
        scrollTrigger: {
            trigger: '.gallery-overflow-container',
            start: 'bottom 90%',
            end: 'top top',
            scrub: 1,

        },
        width: `${hipo}px`
    });

    gsap.to('.gallery-content', {
        scrollTrigger: {
            trigger: '.gallery-content',
            start: 'top 20%',
            end: 'top top',
            scrub: 1,
        },
        opacity: 1, 
    });
}

function galleryActivator() {
    const imgs = Array.from(document.querySelectorAll('.gallery-img'));
    imgs.forEach(img => imgLoadedInfo.push({id: img.id, loaded: false}));
    imgs.forEach(img => img.complete ? handleImageLoad(img) : img.addEventListener('load', () => handleImageLoad(img)));
}

function handleImageLoad(img) {
    imgLoadedInfo.find(info => info.id == img.id).loaded = true;
    !imgLoadedInfo.some(img => !img.loaded) &&  galleryAnimation();
}

function galleryAnimation(){
    const galleryBackgroundText = document.querySelector('.gallery-background-text')
    const galleryContainer = document.querySelector('.gallery-photography-container')

    gsap.to('.gallery-background-text', {
        scrollTrigger: {
            trigger: '.gallery-frame',
            start: `${window.innerHeight * 2}px bottom`,
            end: 'bottom bottom',
            scrub: 1,
        },
        transform: `translate(-${galleryBackgroundText.offsetWidth - window.innerWidth}px, -50%)`
    });

    gsap.to('.gallery-photography-container', {
        scrollTrigger: {
            trigger: '.gallery-frame',
            start: `${window.innerHeight * 2}px bottom`,
            end: 'bottom bottom',
            scrub: 1,
        },
        transform: `translate(-${galleryContainer.offsetWidth - window.innerWidth}px)`
    });
}