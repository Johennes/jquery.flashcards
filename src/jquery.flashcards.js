(function($) {
  
  var CLASS = {
    CARD:  'flashcard',
    FRONT: 'flashcardFront',
    BACK:  'flashcardBack',
    HEAD:  'flashcardHead',
    FOOT:  'flashcardFoot',
    BODY:  'flashcardBody',
    VALUE: 'flashcardValue',
    HINT:  'flashcardHint'
  }
  
  var SIDE = {
    FRONT: 'front',
    BACK:  'back'
  }
  
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
      frontHeader:  function(value, hint) { return '' },
      frontFooter:  function(value, hint) { return '' },
      backHeader:   function(value, hint) { return '' },
      backFooter:   function(value, hint) { return '' },
      questionSide: SIDE.FRONT
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

    var front = createSide(settings, SIDE.FRONT, cardData.frontValue, cardData.frontHint);
    var back = createSide(settings, SIDE.FRONT, cardData.backValue, cardData.backHint);
    var card = $('<div>').addClass(CLASS.CARD);
    card.append(front).append(back);
    
    if (settings.questionSide = SIDE.FRONT) {
      back.hide();
    } else {
      front.hide();
    }
    
    return card;
  }

  function createSide(settings, type, value, hint) {
    var side = $('<div>');
    
    if (type = SIDE.FRONT) {
      side.addClass(CLASS.FRONT);
    } else {
      side.addClass(CLASS.BACK);
    }
    
    var sideHeader = $('<div>').addClass(CLASS.HEAD).html(
      evaluatePossibleCallback(settings[type + 'Header'], value, hint));
    
    var sideBody = $('<div>').addClass(CLASS.BODY);
    var sideValue = $('<div>').addClass(CLASS.VALUE).html(value);
    var sideHint = $('<div>').addClass(CLASS.HINT).html(hint);
    sideBody.append(sideValue).append(sideHint);

    var sideFooter = $('<div>').addClass(CLASS.FOOT).html(
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
    container.find('.' + CLASS.FRONT).toggle();
    container.find('.' + CLASS.BACK).toggle();
    return container;
  }
 
})(jQuery);
