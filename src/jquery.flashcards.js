(function($) {
  
  var CARD_CLASS   = 'flashcard';
  var FRONT_CLASS  = 'flashcardFront';
  var BACK_CLASS   = 'flashcardBack';
  var HEADER_CLASS = 'flashcardHeader';
  var FOOTER_CLASS = 'flashcardFooter';
  var BODY_CLASS   = 'flashcardBody';
  var VALUE_CLASS  = 'flashcardValue';
  var HINT_CLASS   = 'flashcardHint';
  
  $.fn.flashcards = function(arg1, arg2) {
    switch (typeof arg1) {
      case 'undefined':
      case 'object':
        return initialize(this, arg1);
      case 'string':
        switch (arg1) {
          case 'switch-card':
            return switchCard(this, arg2);
          case 'turn-card':
            return turnCard(this);
          default:
            return;
        }
    }
  };
  
  function initialize(container, settings) {
    return container.data('settings', $.extend({
      frontHeader: function(value, hint) { return '' },
      frontFooter: function(value, hint) { return '' },
      backHeader:  function(value, hint) { return '' },
      backFooter:  function(value, hint) { return '' },
      front2Back:  true
    }, settings));
  }
  
  function switchCard(container, data) {
    var settings = container.data('settings');
    return container.html(createCard(settings, data));
  }
  
  function createCard(settings, data) {
    var cardData = $.extend({
      frontValue: '',
      frontHint:  '',
      backValue:  '',
      backHint:   ''
    }, data);

    var front = createSide(settings, 'front', cardData.frontValue, cardData.frontHint);
    var back = createSide(settings, 'back', cardData.backValue, cardData.backHint);
    var card = $('<div>').addClass(CARD_CLASS);
    card.append(front).append(back);
    
    if (settings.front2Back) {
      back.hide();
    } else {
      front.hide();
    }
    
    return card;
  }

  function createSide(settings, type, value, hint) {
    var side = $('<div>').addClass(type === 'front' ? FRONT_CLASS : BACK_CLASS);
    
    var sideHeader = $('<div>').addClass(HEADER_CLASS).html(
      evaluatePossibleCallback(settings[type + 'Header'], value, hint));
    
    var sideBody = $('<div>').addClass(BODY_CLASS);
    var sideValue = $('<div>').addClass(VALUE_CLASS).html(value);
    var sideHint = $('<div>').addClass(HINT_CLASS).html(hint);
    sideBody.append(sideValue).append(sideHint);

    var sideFooter = $('<div>').addClass(FOOTER_CLASS).html(
      evaluatePossibleCallback(settings[type + 'Footer'], value, hint));
    
    side.append(sideHeader).append(sideBody).append(sideFooter);

    return side;
  }

  function evaluatePossibleCallback(callback, value, hint) {
    if (typeof callback === 'function') {
      return callback(value, hint);
    } else {
      return callback;
    }
  }
  
  function turnCard(container) {
    container.find('.' + FRONT_CLASS).toggle();
    container.find('.' + BACK_CLASS).toggle();
    return container;
  }
 
})(jQuery);
