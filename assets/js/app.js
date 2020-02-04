/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import '../css/app.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
const $ = require('jquery');



$(document).scroll(function () {
  const navbar = $("nav.is-primary.is-fixed-top");
  const logo = $(".logo");
  const burger = $("#MenuIcon");
  navbar.toggleClass('scrolled', $(this).scrollTop() > navbar.height());
  if (navbar.hasClass('scrolled')) {
    logo.css({
      width : "75px",
      height : "75px"
    });
    burger.css({
      top: "30px"
    });
  } else {
    logo.css({
      width : "110px",
      height : "110px"
    });
    burger.css({
      top: "50px"
    });
  }
});

$(document).ready(function () {
    $("#MenuIcon").click(function() {
      $("#MainMenu").css("left","0px");
      function showMenu(){
        $("#MainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
        $("#MenuIcon").animate({right:'-100px'},100);
      }
      setTimeout(showMenu, 100);
    });

    $("#close").click(function() {
      $("#MainMenu").css("-webkit-clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
      function hideMenu(){
        $("#MainMenu").css("left","-300px");
        $("#MenuIcon").animate({right:'50px'},300);
      }
      setTimeout(hideMenu, 300);

      function originalLayout() {
        $("#MainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,0% 100%,0% 100%)");
      }
      setTimeout(originalLayout, 600);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
     var $notification = $delete.parentNode;
    $delete.addEventListener('click', () => {
      $notification.remove();
    });
  });
});



$(document).ready(function(){
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll >= 883){
      $('.column.is-6-mobile.is-3-tablet.is-2-desktop').addClass('show bounceIn');
    }
    if(scroll >= 1268){
      $(".timeline-item").addClass('expanded');
    }
    if(scroll >= 2144){
      $('.column.is-12-mobile.is-half-tablet.is-one-third-desktop').addClass('show zoomInDown');
    }
  });
});
$(window).scroll();

$(document).ready(function(){
  $('.button.is-link.declenchement').click(function() {
    var nom = $.trim($('#nom').val());
    var prenom = $.trim($('#prenom').val());
    var mail = $.trim($('#mail').val());
    var message = $.trim($('#message').val());
      if(nom != "" && prenom != "" && mail != "" && message != ""){
        $('.notification.is-success.is-light').addClass('show');
      }
  });
});




$(document).ready(function() {
  var test = document.getElementById('boxRock');
  var parallaxInstance = new Parallax(test);
});
