// function clickAnchorTag() {
//     new event = new CustomEvent('click');
//     var a = document.getElementsByClassName('h4');
//     a.dispatchEvent(event);
// }


// Scrollbar navbar 
// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function (){
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add("scroll-on");
//     }else{
//         nav.classList.remove("scroll-on");
//     }
// }
// nav hide  
// var lastId,
//     topMenu = $("#navbarNav"),
//     topMenuHeight = topMenu.outerHeight() + 1,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function () {
//         var item = $($(this).attr("href"));
//         if (item.length) { return item; }
//     });

// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function (e) {
//     var href = $(this).attr("href"),
//         offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
//     $('html, body').stop().animate({
//         scrollTop: offsetTop
//     }, 850);
//     e.preventDefault();
// });

// // Bind to scroll
// $(window).scroll(function () {
//     // Get container scroll position
//     var fromTop = $(this).scrollTop() + topMenuHeight;

//     // Get id of current scroll item
//     var cur = scrollItems.map(function () {
//         if ($(this).offset().top < fromTop)
//             return this;
//     });
//     // Get the id of the current element
//     cur = cur[cur.length - 1];
//     var id = cur && cur.length ? cur[0].id : "";

//     if (lastId !== id) {
//         lastId = id;
//         // Set/remove active class
//         menuItems
//             .parent().removeClass("active")
//             .end().filter("[href=#" + id + "]").parent().addClass("active");
//     }
// });
// var nav=document.getElementsByClassName("footer")
// var headercol=document.getElementsByClassName("fw-semibold")
// nav.addEventListener("On-click", function(){
//     headercol.style.backgroundColor="#b2bf97"
// })
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar").css("background" , "blue");
        }

        else{
            $(".navbar").css("background" , "#333");  	
        }
    })
})