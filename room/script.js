'use strict'


const slides = [
    {
        title: 'Discover innovative ways to decorate',
        desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        image: 'images/desktop-image-hero-1.jpg'
    },
    {
        title: 'We are available all across the globe',
        desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        image: 'images/desktop-image-hero-2.jpg'
    },
    {
        title: 'Manufactured with the best materials',
        desc: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
        image: 'images/desktop-image-hero-3.jpg'
    }
]


const image = document.querySelector('main')
const title = document.querySelector('h1')
const desc = title.nextElementSibling
const cta = desc.nextElementSibling
let counter = 3

const removeOpacity = el => el.classList.add('opacity-0')
const addOpacity = el => el.classList.remove('opacity-0')

const changeSlide = sign => {
    counter = (counter + 3 + sign) % 3
    console.log('🔢 =>', counter)

    // removeOpacity(image)
    removeOpacity(title)
    removeOpacity(desc)
    removeOpacity(cta)


    setTimeout(() => {
        image.style.backgroundImage = `url('${slides[counter].image}')`
        title.innerText = slides[counter].title
        desc.innerText = slides[counter].desc

    }, 100)



    setTimeout(() => {
        // addOpacity(image)
        addOpacity(title)
        addOpacity(desc)
        addOpacity(cta)
    }, 500)

}