var wholePage = {

  onReady: function(){
    wholePage.firstAction();
    wholePage.hideBottomText();
    $('.projpic').click(wholePage.runCarousel);
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
    var width = $('#slidingPage').width();
    $('#slidingPage').animate({left: width},2000);
    window.setTimeout(wholePage.showAboutMe, 2000);
  },

  showAboutMe: function(){
    $('#slidingPage').remove();
    $('.innerContainer').show();
  },

  hideBottomText: function(){
    $('.innerContainer').hide()
    $('#workBottomImage').hide();
    $('#funBottomImage').hide();
  },

  hoverArrows: function(event) {
    var hoverId = this.id;
    var classId = '.' + this.id;
      if(classId === ".downarrow"){
        event.preventDefault();
        $(document.body).animate({
        'scrollTop' : $('.projects').offset().top}, 1000);
      }else{
       $(classId).toggle();
    }
  },

  scrollToSection: function(event){
    event.preventDefault();
    var sectionId = this.id;
    $(document.body).animate({
      'scrollTop' : $('.'+ sectionId +'').offset().top}, 1000);
  },

  runCarousel: function(event) {
      $('.projpic').each(function() {
          if ($(this).offset().left < 0) {
              $(this).css("left", "150%");
          } else if ($(this).offset().left > $('.jcarousel-wrapper').width()) {
              $(this).animate({
                  left: '50%',
              }, 500 );
          } else {
              $(this).animate({
                  left: '-150%',
              }, 500 );
          }
      });
    },

};

$(document).ready(wholePage.onReady);


