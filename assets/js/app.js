/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/styles.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
const $ = require('jquery');

$(document).scroll(function () {
  const navbar = $("nav.is-primary.is-fixed-top");
  const logo = $(".logo")
  const burger = $("#MenuIcon");
  navbar.toggleClass('scrolled', $(this).scrollTop() > navbar.height());
  if (navbar.hasClass('scrolled')) {
    logo.css({
      width : '75px',
      height : '75px'
    });
    burger.css({
      top: '30px'
    });
  } else {
    logo.css({
      width : '110px',
      height : '110px'
    });
    burger.css({
      top: '50px'
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