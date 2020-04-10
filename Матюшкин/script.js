VANTA.GLOBE({
    el: "#vanta",
    color1: 0x0,
    color2: 0x2a11a0,
    size: 1.20,
    speed: 1.20
})

// JQUERY
$('.card').on('click', function() {
    $('.container').toggleClass('container-origin');
})

$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu').toggleClass('menu_active');
  });

// JS
const anchors = document.querySelectorAll('a[href*="#"]')
for(let anchor of anchors) {
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            speed: 100
        })
    })
}

const progress = document.querySelector('.progress');
window.addEventListener('scroll', progressBar);
function progressBar(e){
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let per = windowScroll / windowHeight * 100;
    progress.style.width = per + '%'
}