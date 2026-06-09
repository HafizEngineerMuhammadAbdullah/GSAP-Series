gsap.from(".page1 .box", {
    duration: 1,
    delay: 1,
    scale: 0,
    rotate: 360,
    // scrollTrigger: ".page1"
    // scrollTrigger: {
    //     trigger: ".page1",
    //     scroller: "body",
    // }
})
// gsap.from(".page2 .box", {
//     duration : 1,
//     delay: 1,
//     scale: 0,
//     rotate: 360,
//     // scrollTrigger: ".page2 .box"
//     scrollTrigger: {
//         trigger: ".page2 .box",
//         scroller: "body",
//     }
// })

// gsap.from(".page2 .box", {
//     duration : 1,
//     delay: 1,
//     scale: 0,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: ".page2 .box",
//         scroller: "body",
//         markers: true,
//         start: "top 80%",
//         end: "top 30%",
//         // toggleActions: "play none none reverse",
//         scrub: 2,
//         pin: true,
//     }
// })


gsap.to(".page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})