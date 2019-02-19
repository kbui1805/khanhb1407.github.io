$(document).ready(function () {

var menuIconCircle = document.getElementById("menuIcon");
var menuIconBar1 = document.getElementById("menuIconBar1");
var menuIconBar2 = document.getElementById("menuIconBar2");
var menuItem = [];
menuItem[0] = document.getElementById("navItemAbout");
menuItem[1] = document.getElementById('navItemWorks');
menuItem[2] = document.getElementById('navItemContact');
    
var myHead = document.getElementById('myHead');
var menuOn = false;
var scrollPercent;
    
function rotateMenuIcon() {
    if(menuOn){
        $(".nav-bar").show(0);
        
        anime({
        targets: menuIconCircle,
        backgroundColor: '#ffffff',
        rotate: '-45deg',
        translateX: -50
        });
        
        anime({
        targets: [menuIconBar1, menuIconBar2],
        backgroundColor: '#406CFF'
        });
        
        anime({
        targets: myHead,
        rotate: '25deg',
        translateX: 4,
        translateY: -6
        });
        
        anime({
        targets: menuItem,
        translateY: -42,
        delay: anime.stagger(100)
        });
    }
    if(!menuOn){
        $(".nav-bar").hide(0);
        
        anime({
        targets: menuIconCircle,
        backgroundColor: '#406CFF',
        rotate: '0deg',
        translateX: 0
        });
        
        anime({
        targets: [menuIconBar1, menuIconBar2],
        backgroundColor: '#ffffff'
        });
        
        anime({
        targets: myHead,
        rotate: '0deg',
        translateX: 0,
        translateY: 0
        });
        
        anime({
        targets: menuItem,
        translateY: 0,
        delay: anime.stagger(100)
        });
    }
    
}
$(".nav-bar").hide(0);
$("#menuIcon").click(function(){
    menuOn = !menuOn;
    rotateMenuIcon();
    
})

window.onscroll = function(){myScrollFunc()};
    
function myScrollFunc() {
    var scrollNum = window.scrollY;
    scrollPercent = scrollNum/(document.body.clientHeight-window.innerHeight);
    if(scrollPercent < 0.9){
        menuOn = false;
        rotateMenuIcon();    
    }
    
    if(scrollPercent >= 0.9){
        menuOn = true;
        rotateMenuIcon();
    }
}

});