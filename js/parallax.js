let burger = document.getElementById('burger-menu')
let menu   = document.getElementById('menu')
let body   = document.getElementById('container-body')
let banner = document.getElementById('banner-welcome')
let wedding = document.querySelector('.wedding')
let cards = document.querySelectorAll('.block-card')
let picture = document.querySelector('.picture-couple')
let elementY = 0
let i = 0;

for (i = 0; i < cards.length; i++) {
    elementY = cards[i].offsetTop
    console.log(cards[i].children[0])
    let index = cards[i].getAttribute('data-show')
    action(elementY, index)
}

function action(elementY ,index){
    window.addEventListener('scroll', () => {
        const screenY = window.scrollY
        if ((screenY-50/elementY) < 0.90 || screenY+50 <= elementY) {
            for (i = 0; i < cards.length; i++) {
                if (cards[i].getAttribute('data-show') === index ){
                    cards[i].children[0].style.transform ='translateX('+((screenY-elementY)*0.065)+'px) translateY('+((screenY-elementY)*-0.09)+'px)';
                    cards[i].children[1].style.transform ='translateY('+((screenY-elementY)*-0.18)+'px)';
                }
            }
        }
    })
}
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
       if (copyText[i].getAttribute('data-ads') == int) {
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







