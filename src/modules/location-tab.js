export function locationTab() {
    const main = document.querySelector('main')

    main.innerHTML = `
        <h1>Location</h1>
    `

    main.id = 'location-tab'
    document.querySelector('#location-btn').classList.add('active')
    document.querySelector('#about-us-btn').classList.remove('active')
    document.querySelector('#contact-btn').classList.remove('active')
    document.querySelector('#home-btn').classList.remove('active')
}