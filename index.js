

document.getElementById("button").onclick = function () {
        //location.href = "https://github.com/saatta01?tab=repositories";
        window.open("https://github.com/saatta01?tab=repositories", "_blank");
    };

$(document).ready(function($){
  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
      $('.vertical-nav ul li a').click(function () {
        $('.vertical-nav ul li a').removeClass('active');
        $(this).addClass('active');
      });

      $('vertical-nav a').hover(function(){
        $(this).find('.label').show();
      }, function() {
        $(this).find('.label').hide();
      });
});
