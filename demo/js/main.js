(function($) {
  var index = 0;
  
  $(document).ready(function() {
    $('.flashcardContainer').flashcards({
      headGenerator: function(side, value, hint) { return '#' + (index + 1) + ' - ' + side + ' head' },
      footGenerator: function(side, value, hint) { return '#' + (index + 1) + ' - ' + side + ' foot' },
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
