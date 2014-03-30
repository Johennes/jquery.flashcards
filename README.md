jquery.flashcards
=================

A jQuery plugin to display, flip and switch flashcards

Try the demo: [click](http://htmlpreview.github.io/?https://github.com/Johennes/jquery.flashcards/blob/master/demo/index.html)

###Initialization

``` javascript
$('#container').flashcards({
  option1: value1,
  option2: value2,
  ...
});
```

None of the options is required. If nothing is supplied, predefined
defaults are used. Available options include:

* `questionSide = 'front' | 'back'` - side of the card that contains
the  question and is displayed first for any new card
* `headGenerator = function(side, value, hint)` - function for
generating the text to be displayed in the card's head
* `footGenerator = function(side, value, hint)` - function for
generating the text to be displayed in the card's foot
