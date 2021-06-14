let burger = document.getElementById('burger-menu')
let menu   = document.getElementById('menu')
let body   = document.getElementById('container-body')
let banner = document.getElementById('banner-welcome')
let wedding = document.querySelector('.wedding')
let cards = document.querySelectorAll('.block-card')
let picture = document.querySelector('.picture-couple')
let elementY = 0
let elementX = 0
//
// let i = 0;
//
// for (i = 0; i < cards.length ; i++) {
//     elementY = cards[i].offsetTop
//     let index = cards[i].getAttribute('data-show')
//     action(elementY, index)
// }
//
// function action(elementY ,index){
//     window.addEventListener('scroll', () => {
//         const screenY = window.scrollY
//         const windowHeight = window.innerHeight * 0.90
//         const  activeY = screenY + windowHeight
//         if (activeY/elementY > 0.85 && activeY/elementY < 1.12) {
//             for (i = 0; i < cards.length; i++) {
//                 if (cards[i].getAttribute('data-show') === index ){
//                     const element1 = (activeY-elementY)/12
//                         cards[i].children[0].style.transform ='translateX('+ element1 + 'px)';
//
//
//                     cards[i].children[1].style.transform ='translateY('+((screenY-elementY)*-0.099)+'px)';
//                     console.log(window.innerWidth/2, cards[i].children[0].offsetWidth/2 + (activeY-elementY)/3.5)
//                 }
//             }
//         }
//     })
// }
let boxHeight = picture.offsetHeight * 0.3;
const height  = window.innerHeight

window.addEventListener('scroll',() => {
    wedding.style.transform ='translateY('+(-window.scrollY/4)+'px)'
    banner.style.transform ='translateY('+(window.scrollY/5)+'px)'

    let activeOnView = (boxHeight + picture.offsetTop) / (window.scrollY + window.innerHeight)
    if ( activeOnView < 0.8 ) {
        picture.style.transform ='translateY('+( (window.scrollY + window.innerHeight - picture.offsetTop )*0.15)+'px)'
    }

})


function navFunction() {
    burger.classList.toggle('menu-active')

    if (menu.classList.contains('menu-effect')) {
        setTimeout(() => menu.classList.remove('menu-effect'), 300)
    } else {
        menu.classList.add('menu-effect')
    }
    setTimeout(() => body.classList.toggle('effect'), 200)
    setTimeout(() =>  banner.classList.toggle('effect'), 200)
}


function copy(int) {
    let copyText = document.querySelectorAll('.address')
    let selector = document.querySelectorAll('.annexe-copy-link')
    for (i=0 ; i<copyText.length; i++){
       if (copyText[i].getAttribute('data-ads') === int) {
           console.log(copyText[i])
           const r = document.createRange();
           let c = copyText[i]
           r.selectNode(c)
           window.getSelection().removeAllRanges();
           window.getSelection().addRange(r);
           document.execCommand('copy');
           window.getSelection().removeAllRanges();
           alert("Copied the text: " + copyText[i].innerText);
       }
    }
}







