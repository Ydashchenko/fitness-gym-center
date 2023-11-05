export function homeTab() {
    const main = document.querySelector('main')

    main.innerHTML = `
        <aside class="left-aside">
            <h2>Do you want to get fit?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>
                Read more
            </button>
        </aside>
        <div class="center-element">
            <h1>FITNESS GYM<br>CENTER</h1>
            <img src="../src/images/bodybuilder.png" alt="bodybuilder" class='bodybuilder'>
        </div>
        <aside class="right-aside">
            <h2>Start training today</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>
                Join now
            </button>
        </aside>
    `

    main.id = 'home-tab'
    document.querySelector('#location-btn').classList.remove('active')
    document.querySelector('#about-us-btn').classList.remove('active')
    document.querySelector('#contact-btn').classList.remove('active')
    document.querySelector('#home-btn').classList.add('active')
}