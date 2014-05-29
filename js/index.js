var wholePage = {

  onReady: function(){
    wholePage.firstAction();
    wholePage.hideBottomText();
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
    $(classId).toggle();
    console.log(classId);
  },

  scrollToSection: function(event){
    var sectionId = this.id;
    $(document.body).animate({
      'scrollTop' : $('.'+ sectionId +'').offset().top}, 1000);
  },



};

$(document).ready(wholePage.onReady);


