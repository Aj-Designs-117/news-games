/* =======================================
    * TOGGLE SIDEBAR
=========================================*/
const sidebar = document.getElementById('nav-active-menu');

sidebar.addEventListener('click', ()=>{
    document.getElementById('menu-toggle').classList.toggle('sidebar-active-toogle');

    gsap.from('.sidebar-item-animation', {
        duration: 2.5,
        opacity:0,
        y:100,
        stagger:0.25,
        ease:"back.out(1)"
    })
})

/* =======================================
    * GSAP ANIMATION SCROLL
=========================================*/
gsap.from('.card-animation', {
    duration: 2.5,
    opacity:0,
    y:100,
    stagger:0.25,
    ease:"back.out(1)"
})

/* =======================================
    * CIRCLE SCROLL
=========================================*/

const circleScroll = new CircleType(document.getElementById('rotated')).radius(80);

$(".wrapper").scroll(()=>{
    let offset = $(".wrapper").scrollTop();
    offset = offset * 0.4

    $(".circle-text").css({
        "-moz-transform": "rotate(" + offset + "deg)",
        "-webkit-transform": "rotate(" + offset + "deg)",
        "-o-transform": "rotate(" + offset + "deg)",
        "-ms-transform": "rotate(" + offset + "deg)",
        transform: "rotate(" + offset + "deg)",
    })
})
