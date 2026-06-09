const menu = document.querySelector('#navbar i');
const cross = document.querySelector('#full i');

// let tl = gsap.timeline({paused : true});
let tl = gsap.timeline();

tl.to('#full', {
    right : 0,
    duration: 0.9
})

tl.from('#full h4', {
    x: 200,
    duration: 0.6,
    stagger: 0.2,
    opacity: 0
})

tl.from('#full i', {
    opacity: 0
})

tl.pause();

menu.addEventListener('click', () => {
    tl.play();
})

cross.addEventListener('click', () => {
    tl.reverse();
})

