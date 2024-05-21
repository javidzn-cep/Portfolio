const 
    lowPassFilter = (newValue, prevValue, alpha) => alpha * newValue + (1 - alpha) * prevValue,
    updateMouseMove = e => [cursorX, cursorY] = [e.clientX, e.clientY],
    degToRad = deg => deg * (Math.PI / 180);
let cursorX, cursorY, rollBarTransaltePerc = 0;



document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousemove', updateMouseMove);
    Array.from(document.querySelectorAll('.cursor-hoverable')).forEach(element => [{event: 'mouseenter', isHovering: true}, {event: 'mouseleave', isHovering: false}].forEach(obj => element.addEventListener(obj.event, () => document.querySelector('.cursor-frame').classList.toggle('cursor-hover', obj.isHovering))));
    document.querySelector('.navigation-btn').addEventListener('click', () => document.querySelector('.navigation-container').classList.toggle('navigation-shown'))
    moveCursor();
    moveHeaderRentagle();
    moveMarquees();
})

function moveCursor(){
    const cursor = document.querySelector('.cursor');
    const newCursorX = lowPassFilter(cursorX, cursor.offsetLeft, 0.15)
    const newCursorY = lowPassFilter(cursorY, cursor.offsetTop, 0.15)
    cursor.style.top  = `${newCursorY}px`
    cursor.style.left = `${newCursorX}px`
    requestAnimationFrame(moveCursor)
}

function moveHeaderRentagle(){
    const rectangle = document.querySelector('.background-rectangle');
    const rectangleRect = rectangle.getBoundingClientRect();
    const cursorRect = document.querySelector('.cursor').getBoundingClientRect();
    const ratio = 0.02;
    const inclination = 40
    rectangle.style.transform = ` rotate(${inclination}deg) translate(${(-rectangleRect.width / 2) - ((cursorRect.left - rectangleRect.left) * ratio)}px, ${(-rectangleRect.height / 2) - ((cursorRect.top - rectangleRect.top) * ratio)}px) `;
    requestAnimationFrame(moveHeaderRentagle)
}

function moveMarquees(){
    rollBarTransaltePerc = ((rollBarTransaltePerc + 0.05) % 100)
    const titleItems = Array.from(document.querySelectorAll('.title-marquee-items'))
    const aptitudeItems = Array.from(document.querySelectorAll('.aptitudes-marquee-items'))
    titleItems.map(item => item.style.transform = `translateX(${rollBarTransaltePerc - 100}%)`)
    aptitudeItems.map(item => item.style.transform = `translateX(${rollBarTransaltePerc - 100}%)`)
    requestAnimationFrame(moveMarquees)
}