const sidebarWrapperEl = document.querySelector('#sidebar-wrapper')
const menuToggleEl = document.querySelector('.menu-toggle')

menuToggleEl.addEventListener('click', e => {
    e.preventDefault()
    sidebarWrapperEl.classList.toggle('active')
    toggleMenuIcon()
    menuToggleEl.classList.toggle('active')
})

const toggleMenuIcon = () => {
    const menuToggleBarsEl = document.querySelector('.menu-toggle > .fa-bars')
    const menuToggleTimesEl = document.querySelector('.menu-toggle > .fa-times')
        
    if (menuToggleBarsEl) {
        menuToggleBarsEl.classList.remove('fa-bars')
        menuToggleBarsEl.classList.add('fa-times')
    }
        
    if (menuToggleTimesEl) {
        menuToggleTimesEl.classList.remove('fa-times')
        menuToggleTimesEl.classList.add('fa-bars')
    }
}