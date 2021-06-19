let burger  = document.getElementById('burger-menu')
let menu    = document.getElementById('menu')
let body    = document.getElementById('container-body')
let annexe  = document.querySelector('.container-annexe')
let banner  = document.getElementById('banner-welcome')
let wedding = document.querySelector('.wedding')
let cards   = document.querySelectorAll('.cards')
let picture = document.querySelector('.picture-couple')

let i = 1.0;

// observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.intersectionRatio > 0) {
//             observer.unobserve(entry.target);
//             action(entry.target)
//         }
//     },{threshold: [1]})
// })
//
// cards.forEach(card => {
//     observer.observe(card)
// })
//

//
// for (i = 0; i < cards.length ; i++) {
//     let cardTop = cards[i]
//     cards[i].children[0].style.transform = 'translateX(-150px) translateY(150px)'
//     cards[i].children[1].style.transform = 'translateY(250px)'
//     cards[i].children[1].style.transition = 'all 500ms'
//     action(cardTop, cards[i])
// }
//
//
// function action(cardTop) {
//     window.addEventListener('scroll', () => {
//
//             if (scrollY +(window.innerHeight - 200) >= cardTop.offsetTop  && scrollY + (window.innerHeight/2-5) <= cardTop.offsetTop ){
//                 let diff = ((scrollY + window.innerHeight/2+1) - cardTop.offsetTop )
//                 cardTop.children[0].style.transform = 'translateX(' + (diff /1.87) + 'px) translateY(' + (diff / -1.50) + 'px)'
//                 cardTop.children[1].style.transform = 'translateY('+ (diff /19) + 'px)'
//                 cardTop.children[1].style.transition = 'all 2s'
//             }
//
//     })
// }
// function action(entry) {
//     window.addEventListener('scroll', () => {
//         let diff = ((scrollY + window.innerHeight/2+1) - entry.offsetTop )
//         let ratio = (diff /133)
//         if (ratio > 200){
//             ratio = 200
//
//         }
//         console.log()
//         console.log(ratio)
//         entry.style.transform = 'translateX(' + ratio + 'px)'
//         // cardTop.children[1].style.transform = 'translateY('+ (diff /19) + 'px)'
//         // cardTop.children[1].style.transition = 'all 2s'
//     })
// }

let boxHeight = picture.offsetHeight * 0.3;

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
    setTimeout(() =>  annexe.classList.toggle('effect'), 200)
}


function copy(int) {
    let copyText = document.querySelectorAll('.address')
    for (i = 0; i < copyText.length; i++) {
        console.log(copyText[i].getAttribute('data-ads'))
        if (int == copyText[i].getAttribute('data-ads')) {
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







