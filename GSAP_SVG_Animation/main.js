let initialPath = `M 10 100 Q 650 100 1290 100`;


let finalPath = `M 10 100 Q 650 100 1290 100`;

let string = document.querySelector('#string');

// string.addEventListener('mouseenter',() => {
//     console.log('mouse was entered!');  
// })
string.addEventListener('mouseleave', () => {
    // console.log('mouse was leave!'); 

    gsap.to('svg path', {
        attr: { d: finalPath },
        //   duration: 0.3,
        //   ease: "bounce.out"
        duration: 2.5,
        ease: "elastic.out(1.2,0.2)",
    })
})

string.addEventListener('mousemove', (e) => {
    initialPath = `M 10 100 Q ${e.x} ${e.y} 1290 100`;

    gsap.to('svg path', {
        attr: { d: initialPath },
        duration: 0.2,
        ease: "power3.out"
    })
})

