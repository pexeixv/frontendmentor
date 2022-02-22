// alert('Not mobile responsive as yet!')
tl = gsap.timeline();
tl.from('.anim1', { opacity: 0, x: -50, duration: 0.5, stagger: 0.2 })
    .from('.hero_image img', { opacity: 0, y: 200, duration: 0.5 })


bars = document.querySelector('.hamburger')
barsImg = document.querySelector('.hamburger img')
nav = document.querySelector('.nav')

bars.addEventListener('click', () => {
    cond = nav.classList.toggle('show');
    if (cond)
        barsImg.src = 'images/icon-close.svg';
    else barsImg.src = 'images/icon-hamburger.svg';
})