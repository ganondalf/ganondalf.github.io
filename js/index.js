var wholePage = {
  onReady: function{
    $('a[href*="#"]').click(wholePage.scrollToSection);
  },

  scrollToSection: function(event){
    alert(this);
    var sectionName = this.id;
    console.log(sectionName);
  },

};

$(document).ready(wholePage.onReady);


// (this).click(function() {
//             $('html, body').animate({scrollTop: targetOffset}, 400);
//             return false;

