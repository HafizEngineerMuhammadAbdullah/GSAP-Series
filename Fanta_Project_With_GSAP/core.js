let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".blob-stories",
        start: "0% 95%",//one is fix and another one is depend upon screen/target element
        end: "50% 50%",
        scrub: true,
        markers: true
    }
})


tl.to('#fanta-img', {
    top: '120%',
    left: '5%'
}, 'animate-orange')

tl.to('#half-orange', {
    top: '160%',
    left: '23%'
}, 'animate-orange')

tl.to('#orange', {
    width: '16%',
    top: '160%',
    right: '10%'
}, 'animate-orange')


tl.to('#leaf', {
    top: '110%',
    left: '80%',
    rotate: "130deg"
}, 'animate-orange')

tl.to('#leaf2', {
    top: '110%',
    right: '80%',
    rotate: "130deg"
}, 'animate-orange')


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards-section",
        start: "0% 95%",//one is fix and another one is depend upon screen/target element
        end: "50% 50%",
        scrub: true,
        markers: true
    }
})

tl2.from('.lemon', {
    
})