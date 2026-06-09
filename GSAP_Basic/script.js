gsap.from("#box1", {
    x: 500,
    duration: 2,
    backgroundColor: "blue",
    borderRadius: "50%",
    scale: 1.5,
    rotate: 360,
    delay: 2
});
gsap.to("#box2", {
    x: 500,
    y: -200,
    duration: 2,
    backgroundColor: "yellow",
    borderRadius: "0%",
    scale: 0.5,
    rotate: 360,
    delay: 2
});

gsap.from("h1", {
    y: -200,
    duration: 1,
    // apply the animation to each h1 with a delay of 0.5 seconds between them
    // stagger: 0.5,
    // apply the animation to each h1 with a delay of 1 second between them in reverse order
    stagger: -1,
    opacity: 0,
    repeat: 2,
    yoyo: true,
    scale: 0.5,
    delay: 4
});