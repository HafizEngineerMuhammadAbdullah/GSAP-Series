gsap.from("#page1 .box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    rotation: 360,
});
gsap.from("#page2 .box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    rotation: 360,
    scrollTrigger: "#page2 .box",
});