var wholePage = {
  onReady: function(){
    $('a[href="#"]').click(wholePage.scrollToSection);
  },

  scrollToSection: function(event){
    var sectionId = this.id;
    $(document.body).animate({
      'scrollTop' : $('.'+ sectionId +'').offset().top}, 1000);
  },

};

$(document).ready(wholePage.onReady);

