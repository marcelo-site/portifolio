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
const darkTrue = () => {
    if (localStorage?.getItem('dark')) {
        checkDark.checked = true
        document.querySelector('html').classList.add('dark')
    }
}
darkTrue()

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
    if (indexImg == certs.length - 1) right.style.backgroundColor = '#626262'
    else right.style.backgroundColor = ''

    if (indexImg === 0) left.style.backgroundColor = '#626262'
    else left.style.backgroundColor = ''
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

const exitModalMsg = () => document.querySelector('.modal-msg').style.display = 'none'

function submit(e) {
    e.preventDefault()
    let text = `Olá tenho interesse nos seus serviços, \n \n`
    text += `*Meu nome*: ${e.target.name.value} \n`
    text += `*Meu e-mail*: ${e.target.email.value} \n`
    text += `*Mensagem:* \n ${e.target.msg.value}`

    const textUrl = window.encodeURIComponent(text)
    const whats = document.querySelector('#msg-form')
    whats.href = `https://api.whatsapp.com/send?phone=5581991869812&text=${textUrl}`
    document.querySelector('.modal-msg').style.display = ''
}
document.querySelector('form').addEventListener('submit', submit)