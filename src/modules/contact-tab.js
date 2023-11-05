export function contactTab() {
    const main = document.querySelector('main')

    main.innerHTML = `
        <h1>Contact</h1>
    `

    main.id = 'contact-tab'
    document.querySelector('#location-btn').classList.remove('active')
    document.querySelector('#about-us-btn').classList.remove('active')
    document.querySelector('#contact-btn').classList.add('active')
    document.querySelector('#home-btn').classList.remove('active')
}