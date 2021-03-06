
document.getElementsByClassName('menu-nav__burger')[0].addEventListener('click', burgerClick);

var bugerOpen = false;
var icon = document.getElementsByClassName('menu-nav__burger')[0]
var menuBtn = document.getElementsByClassName('menu-nav__links-ul')[0].getElementsByTagName('li');

timeLine = new gsap.timeline();

function burgerClick(){
    var timeLineBurger = new TimelineMax();
    if (bugerOpen) {
        bugerOpen = false
        
        icon.setAttribute("src", "../asset/images/icon-hamburger.svg");
        for (var btn of menuBtn) {
            
            timeLineBurger.to(btn,0.2,{x: -300, opacity: '0',ease: Circ.easeOut},'-=0.14')
        }
        document.querySelectorAll("html")[0].style.overflow = "scroll";
        timeLineBurger.to('.menu-nav__links-ul', 0.2, {transform : 'scaleY(0)', transformOrigin: 'top',ease: Circ.easeOut},'-=0.14')
        timeLineBurger.to('.menu-nav__links-ul', {display : 'none'})
    }else{
        bugerOpen = true

        document.querySelectorAll("html")[0].style.overflow = "hidden";
        timeLineBurger.to('.menu-nav__links-ul', {display : 'block'})
        icon.setAttribute("src", "../asset/images/icon-close.svg");
        timeLineBurger.to('.menu-nav__links-ul',  0.3, {transform : 'scaleY(1)', transformOrigin: 'top',ease: Circ.easeOut},0,'+=0.14')
        for (var btn of menuBtn) {
            timeLineBurger.to(btn,0.30,{x: 0,ease: Circ.easeOut},'-=0.30')
            timeLineBurger.to(btn,0.35,{opacity: '1',ease: Circ.easeOut},'-=0.22')
        }
    }
    
}
