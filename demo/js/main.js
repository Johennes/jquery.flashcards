(function($) {
  var index = 0;
  
  $(document).ready(function() {
    $('.flashcardContainer').flashcards({
      frontHeader: function(value, hint) { return '#' + (index + 1) + ' - front header' },
      frontFooter: function(value, hint) { return '#' + (index + 1) + ' - front footer' },
      backHeader:  function(value, hint) { return '#' + (index + 1) + ' - back header' },
      backFooter:  function(value, hint) { return '#' + (index + 1) + ' - back footer' }
    });
    
    $('button[name=switch]').click(function() {
      index = (++index) % cards.length;
      $('.flashcardContainer').flashcards('switch-card', cards[index]);
    });
    
    $('button[name=turn]').click(function() {
      $('.flashcardContainer').flashcards('turn-card');
    });
    
    $('.flashcardContainer').flashcards('switch-card', cards[index]);
  });
  
})(jQuery);
