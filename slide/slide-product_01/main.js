var container = $('div#carouselOuter'),
    allSlides = $(container).find('#carouselList'),
    allSlidesWidth = $(allSlides).width(), //1736
    oneSlideWidth = $(allSlides).find('li').first().outerWidth(); //248
                    
// Set up
var playing = false;
 
allSlides.find('li:first').before(allSlides.find('li').last());
$('#carouselList').css('left', -oneSlideWidth+'px');
        
// Move back
container.find('#prevBtn').on('click', function() {
        
  if ( playing == true ) {
           return;
      } else {
        playing = true;

  $('#carouselList').animate({
          left: '+='+oneSlideWidth,
          easing: 'linear',
          //duration: 100
     }, function() {
          playing = false;
          $(allSlides).css('left', '-=' + oneSlideWidth + 'px');
          allSlides.find('li:first').before(allSlides.find('li:last'))
     });
  }   
});

// Move forward
container.find('#nextBtn').on('click', function() {
  if ( playing == true ) {
  return;
  } else {
  playing = true;
  allSlides.find('li:last').after(allSlides.find('li:first'));                     $(allSlides).css('left', '+=' + oneSlideWidth + 'px');
    $('#carouselList').animate({
        left: '-='+oneSlideWidth,
        easing: 'linear'
        //duration: 100
        }, function() {
            playing = false;
        });
    }
});    