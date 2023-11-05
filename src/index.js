import { headerLoader } from './modules/header-loader';
import { homeTab } from './modules/home-tab';
import { aboutUsTab } from './modules/about-us-tab';
import { locationTab } from './modules/location-tab';
import { contactTab } from './modules/contact-tab';

import './style.css'

function addButtonClicks() {
    const homeBtn = document.getElementById('home-btn')
    const aboutUsBtn = document.getElementById('about-us-btn')
    const contactBtn = document.getElementById('contact-btn')
    const locationBtn = document.getElementById('location-btn')

    homeBtn.addEventListener('click', homeTab)
    aboutUsBtn.addEventListener('click', aboutUsTab)
    contactBtn.addEventListener('click', contactTab)
    locationBtn.addEventListener('click', locationTab)
}

function start() {
    headerLoader();
    homeTab();
    addButtonClicks()
}

start();