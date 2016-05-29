var initShowActiveNavigationLink = require('./navigationActiveLink.js');
var initPageScrollLinks = require('./pageScrollLinks.js');

$(document).ready(function(){

    // Change active menu link on scroll
    initShowActiveNavigationLink();

    // Page scroll anchors init
    initPageScrollLinks();

});