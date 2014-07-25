jquery.flashcards
=================

A jQuery plugin to display, flip and switch flashcards

Check out the demo: [click](http://htmlpreview.github.io/?https://github.com/Johennes/jquery.flashcards/blob/master/demo/index.html)

# Initialization

To initialize the plugin, call the `flashcards` functions with a
settings object on the desired container.

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

# Switching Cards

To display a new flashcard, select the container element and invoke the
`flashcards` function injecting the command `'switch-card'` and the
card's JSON data.

``` javascript
$('#container').flashcards('switch-card', {
  frontValue: ...,
  frontHint:  ...,
  backValue:  ...,
  backHint:   ...
});
```

# Turning Cards

Cards can be turned front to back and back to front by calling the
`flashcards` function on the container element with the command
parameter `'turn-card'`.

``` javascript
$('#container').flashcards('turn-card');
```
