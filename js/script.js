const 
    lowPassFilter = (newValue, prevValue, alpha) => alpha * newValue + (1 - alpha) * prevValue,
    updateMouseMove = e => [cursorX, cursorY] = [e.clientX, e.clientY],
    degToRad = deg => deg * (Math.PI / 180);
let cursorX, cursorY, rollBarTransaltePerc = 0;



document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousemove', updateMouseMove);
    Array.from(document.querySelectorAll('.cursor-hoverable')).forEach(element => [{event: 'mouseenter', isHovering: true}, {event: 'mouseleave', isHovering: false}].forEach(obj => element.addEventListener(obj.event, () => document.querySelector('.cursor-frame').classList.toggle('cursor-hover', obj.isHovering))));
    document.querySelector('.navigation-btn').addEventListener('click', toggleNavigation)
    document.querySelector('.navigation-outside').addEventListener('click', toggleNavigation)
    moveCursor();
    moveHeaderRentagle();
    moveMarquees();
});

function toggleNavigation(){
    document.querySelector('.navigation-frame').classList.toggle('navigation-shown');
    document.body.classList.toggle('scroll-block')
}

function moveCursor(){
    const cursor = document.querySelector('.cursor');
    const newCursorX = lowPassFilter(cursorX, cursor.offsetLeft, 0.3)
    const newCursorY = lowPassFilter(cursorY, cursor.offsetTop, 0.3)
    cursor.style.top  = `${newCursorY}px`
    cursor.style.left = `${newCursorX}px`
    requestAnimationFrame(moveCursor)
}

function moveHeaderRentagle(){
    const rectangle = document.querySelector('.background-rectangle');
    const rectangleRect = rectangle.getBoundingClientRect();
    const cursorRect = document.querySelector('.cursor').getBoundingClientRect();
    const ratio = 0.01;
    const inclination = 30
    rectangle.style.transform = `translate(${(-rectangle.offsetWidth / 2) - (cursorRect.left - rectangleRect.left ) * ratio}px, ${(-rectangle.offsetLeft / 2) -(cursorRect.top - rectangleRect.top) * ratio}px) rotate(${inclination}deg) `;
    requestAnimationFrame(moveHeaderRentagle)
}

function moveMarquees(){
    rollBarTransaltePerc = ((rollBarTransaltePerc + .075) % 100)
    const titleItems = Array.from(document.querySelectorAll('.title-marquee-items'))
    const aptitudeItems = Array.from(document.querySelectorAll('.aptitudes-marquee-items'))
    titleItems.map(item => item.style.transform = `translateX(${-rollBarTransaltePerc }%)`)
    aptitudeItems.map(item => item.style.transform = `translateX(${rollBarTransaltePerc - 100}%)`)
    requestAnimationFrame(moveMarquees)
}