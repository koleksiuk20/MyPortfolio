var initShowActiveNavigationLink = require('./navigationActiveLink.js');
var initPageScrollLinks = require('./pageScrollLinks.js');
var initMainNavMobile = require('./mainNavMobile.js');

$(document).ready(function(){

    // Change active menu link on scroll
    initShowActiveNavigationLink();

    // Page scroll anchors init
    initPageScrollLinks();

    // Mobile menu init on click
    initMainNavMobile();

});