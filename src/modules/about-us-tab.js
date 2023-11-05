export function aboutUsTab() {
    const main = document.querySelector('main')

    main.innerHTML = `
        <h1>About Us</h1>
    `

    main.id = 'about-us-tab'
    document.querySelector('#location-btn').classList.remove('active')
    document.querySelector('#about-us-btn').classList.add('active')
    document.querySelector('#contact-btn').classList.remove('active')
    document.querySelector('#home-btn').classList.remove('active')
}