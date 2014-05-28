var wholePage = {

  onReady: function(){
    wholePage.firstAction();
    $('.arrow').hover(wholePage.hoverArrows);
    $('a[href="#"]').click(wholePage.scrollToSection);
  },

  firstAction: function(){
    var width = $('#slidingPage').width();
    var halfWidth = width / 3;
    $('#thoughtbox h1').animate({left: halfWidth},2000);
    window.setTimeout(wholePage.hidePage, 2800);
   },

  hidePage: function(){
    var width = $('.welcome').width();
    // $('.welcome').animate({top: width}, {queue:false, duration: 2000});
    $('.welcome').fadeOut();
  },

  scrollToSection: function(event){
    var sectionId = this.id;
    $(document.body).animate({
      'scrollTop' : $('.'+ sectionId +'').offset().top}, 1000);
  },



};

$(document).ready(wholePage.onReady);


