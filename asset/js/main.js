// SIDEBAR
const sidebarMobileBtn = document.querySelector('#sidebar-mobile-btn')
const sidebarMobile = document.querySelector('#main-sidebar')
const sidebarMobileCloser = document.querySelector('#sidebar-closer')

sidebarMobileBtn.addEventListener('click', function() {
    sidebarMobile.classList.remove('-translate-x-full')
    sidebarMobileCloser.classList.remove('hidden')
})

sidebarMobileCloser.addEventListener('click', function() {
    sidebarMobileCloser.classList.add('hidden')
    sidebarMobile.classList.add('-translate-x-full')
})

