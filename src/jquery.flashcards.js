(function($) {
  
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
      cardClass:   'flashcard',
      frontClass:  'flashcardFront',
      backClass:   'flashcardBack',
      headerClass: 'flashcardHeader',
      footerClass: 'flashcardFooter',
      bodyClass:   'flashcardBody',
      valueClass:  'flashcardValue',
      hintClass:   'flashcardHint',
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
    var card = $('<div>').addClass(settings.cardClass);
    card.append(front).append(back);
    
    if (settings.front2Back) {
      back.hide();
    } else {
      front.hide();
    }
    
    return card;
  }

  function createSide(settings, type, value, hint) {
    var side = $('<div>').addClass(settings[type + 'Class']);
    
    var sideHeader = $('<div>').addClass(settings.headerClass).html(
      evaluatePossibleCallback(settings[type + 'Header'], value, hint));
    
    var sideBody = $('<div>').addClass(settings.bodyClass);
    var sideValue = $('<div>').addClass(settings.valueClass).html(value);
    var sideHint = $('<div>').addClass(settings.hintClass).html(hint);
    sideBody.append(sideValue).append(sideHint);

    var sideFooter = $('<div>').addClass(settings.footerClass).html(
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
    var settings = container.data('settings');
    
    container.find('.' + settings.frontClass).toggle();
    container.find('.' + settings.backClass).toggle();
    
    return container;
  }
 
})(jQuery);
