const page1Animation = () => {
    let tl = gsap.timeline();
    tl.from("nav h1,nav h4, nav button", {
        opacity: 0,
        y: -100,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.2
    })

    tl.from(".center-part1 h1", {
        x: -500,
        opacity: 0,
        duration: 0.6
    })
    tl.from(".center-part1 p", {
        x: -300,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    })
    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5
    }, "-=1");

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6
    })
}

const page2Animation = () => {
    // gsap.from(".services h3", {
    //     opacity: 0,
    //     x: -100,
    //     duration: 0.5,
    //     scrollTrigger: {
    //         trigger: ".services h3",
    //         scroller: "body",
    //         markers: true,
    //         start: "top 50%"
    //     }
    // })

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top -70%",
            scrub: 2

        }
    })

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5
    });

    // Card Line1

    tl2.from(".card.line1.left", {
        opacity: 0,
        x: -200,
        duration: 1
    }, "cardLine1")
    tl2.from(".card.line1.right", {
        opacity: 0,
        x: 200,
        duration: 1
    }, "cardLine1")

    // Card Line2

    tl2.from(".card.line2.left", {
        opacity: 0,
        x: -200,
        duration: 1
    }, "cardLine2")
    tl2.from(".card.line2.right", {
        opacity: 0,
        x: 200,
        duration: 1
    }, "cardLine2")


    // Card Line3
    tl2.from(".card.line3.left", {
        opacity: 0,
        x: -200,
        duration: 1
    }, "cardLine3")
    tl2.from(".card.line3.right", {
        opacity: 0,
        x: 200,
        duration: 1
    }, "cardLine3");


    // Card Line4
    tl2.from(".card.line4.left", {
        opacity: 0,
        x: -200,
        duration: 1
    }, "cardLine4")
    tl2.from(".card.line4.right", {
        opacity: 0,
        x: 200,
        duration: 1
    }, "cardLine4");

}

page1Animation();
page2Animation();