const btnMenu = document.querySelector('.btn-abrir-menu')
const menuMobile = document.querySelector('#menu-mobile')
const overlay = document.querySelector('.overlay-menu')

btnMenu.addEventListener('click', () => menuMobile.classList.add('abrir-menu'))
menuMobile.addEventListener('click', () => menuMobile.classList.remove('abrir-menu'))
overlay.addEventListener('click', () => menuMobile.classList.remove('abrir-menu'))

const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal > div')
const modalImg = document.querySelector('.modal img')
const certs = document.querySelectorAll('.certs img')
const right = document.querySelector('#right')
const left = document.querySelector('#left')
const exitModal = document.querySelector('#exit-modal')
const spanPlus = document.querySelector('.img-lenght span')

exitModal.addEventListener('click', () => modal.style.display = 'none')

const changeImg = (param) => {
    const img = certs[param].getAttribute('src')
    modalImg.setAttribute('src', img)
    modal.style.display = ''
    const height = modalImg.clientHeight
    modalContent.style.height = `${height}px`
    if (indexImg == certs.length - 1) {
        right.style.backgroundColor = '#626262'
    } else {
        right.style.backgroundColor = ''
    }
    if (indexImg === 0) {
        left.style.backgroundColor = '#626262'
    } else {
        left.style.backgroundColor = ''
    }
}

let indexImg = 0
certs.forEach((cert, i) => cert.addEventListener('click', () => {
    indexImg = i
    changeImg(i)
}))
spanPlus.addEventListener('click', () => certs[5].click())

right.addEventListener('click', () => {
    if (indexImg >= 0 && indexImg < certs.length - 1) {
        indexImg++
        changeImg(indexImg)
    }
})
left.addEventListener('click', () => {
    if (indexImg >= 1 && indexImg < certs.length) {
        indexImg--
        changeImg(indexImg)
    }
})

const checkDark = document.querySelector('#change-theme')

checkDark.addEventListener('change', (check) => {
    const html = document.querySelector('html')
    localStorage.removeItem('dark')
    if (check.target.checked) {
        html.classList.add('dark')
    } else {
        html.classList.remove('dark')
    }
    if (html.classList.contains('dark')) {
        localStorage.setItem('dark', 1)
    }
})

const dark_ok = () => {
    const dark = localStorage.getItem('dark')
    if (dark) {
        checkDark.checked = true
        document.querySelector('html').classList.add('dark')
    }
}
dark_ok()
