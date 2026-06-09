const main = document.querySelector('#main');
const cursor = document.querySelector('#cursor');
const image = document.querySelector('#image');

main.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
    })
});

image.addEventListener('mouseenter', () => {
    cursor.innerText = "View more";
    gsap.to(cursor, {
        scale: 5,
        backgroundColor: '#ffffff3d'
    })
});
image.addEventListener('mouseleave', () => {
    cursor.innerText = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#fff'
    })
});