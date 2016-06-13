var navigationActiveLink = require('./navigationActiveLink.js');
var initPageScrollLinks = require('./pageScrollLinks.js');
var initMainNavMobile = require('./mainNavMobile.js');
var initAnimatedProgressBar = require('./animatedProgressBar.js');
var initSliderTransition = require('./sliderTransition.js');

$(document).ready(function(){

    // Page scroll anchors init
    initPageScrollLinks();

    // Mobile menu init on click
    initMainNavMobile();

    // Init animated progress bar
    initAnimatedProgressBar();

    // Form validator
    $('form').validator();

    // Init slider transition
    initSliderTransition();

});

$(window).load(function() {

    // Change active menu link on scroll
    navigationActiveLink();

});