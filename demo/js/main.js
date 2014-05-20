(function($) {
  
  var index = 0;
  
  
  $(document).ready(function() {
    $('input[name=side_mode]').click(function() {
      var mapping = null;
      
      switch ($(this).attr('id')) {
        case 'front_and_back':
          mapping = {
            frontValue: 'frontValue',
            backValue:  'backValue',
            frontHint:  'frontHint',
            backHint:   'backHint'
          };
          break;
        case 'front_only':
          mapping = {
            frontValue: 'frontHint',
            backValue:  'frontValue',
            frontHint:  null,
            backHint:   null
          };
          break;
        case 'back_only':
          mapping = {
            frontValue: 'backHint',
            backValue:  'backValue',
            frontHint:  null,
            backHint:   null
          };
          break;
      }
      
      $('.flashcardContainer').html('').flashcards({
        sideMapping:   mapping,
        headGenerator: headGenerator,
        footGenerator: footGenerator
      });
      
      $('.flashcardContainer').flashcards('switch-card', cards[index]);
    });
    
    $('input[name=side_mode][checked=checked]').click();
    
    $('button[name=switch]').click(function() {
      index = (++index) % cards.length;
      $('.flashcardContainer').flashcards('switch-card', cards[index]);
    });
    
    $('button[name=turn]').click(function() {
      $('.flashcardContainer').flashcards('turn-card');
    });
  });
  
  
  function headGenerator(side, value, hint) {
    return '#' + (index + 1) + ' - ' + side + ' head'
  }
  
  
  function footGenerator(side, value, hint) {
    return '#' + (index + 1) + ' - ' + side + ' foot'
  };
  
})(jQuery);
