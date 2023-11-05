export function headerLoader() {
    const content = document.querySelector('#content')
    const header = document.createElement('header')
    const main = document.createElement('main')

    header.innerHTML = `
        <button>
            <img src="../src/images/search-logo.png" alt="SearchLogo" class='search-logo'>
        </button>
        <button id="location-btn">Location</button>
        <button id="about-us-btn">About Us</button>
        <img src="../src/images/main-logo.png" alt="SearchLogo" class='main-logo'>
        <button id="contact-btn">Contact</button>
        <button id="home-btn">Home</button>
        <button class="menu-btn">
            <span></span>
            <span></span>
            <span></span>
        </button>
    `
    content.appendChild(header)
    content.appendChild(main)
}