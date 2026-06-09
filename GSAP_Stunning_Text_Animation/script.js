const splitText = () => {
    const h1 = document.querySelector('h1');

    const headingContent = h1.textContent;

    const half = Math.floor(headingContent.length / 2);
    let word = '';

    headingContent.split("").forEach((char, idx) => {

        if (idx < half) {
            word += `<span class='left-half'>${char}</span>`;
        }
        else {
            word += `<span class='right-half'>${char}</span>`;
        }

    });

    h1.innerHTML = word;
}

splitText();

gsap.from('h1 span.left-half', {
    y: 200,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
    opacity: 0
})

gsap.from('h1 span.right-half', {
    y: 200,
    duration: 1,
    delay: 0.5,
    stagger: -0.3,
    opacity: 0
})
// console.log(word);

