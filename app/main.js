var navigationActiveLink = require('./navigationActiveLink.js');
var initPageScrollLinks = require('./pageScrollLinks.js');
var initMainNavMobile = require('./mainNavMobile.js');
var initAnimatedProgressBar = require('./animatedProgressBar');

$(document).ready(function(){

    // Change active menu link on scroll
    navigationActiveLink();

    // Page scroll anchors init
    initPageScrollLinks();

    // Mobile menu init on click
    initMainNavMobile();

    // Init animated progress bar
    initAnimatedProgressBar();

});