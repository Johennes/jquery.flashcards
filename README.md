jquery.flashcards
=================

A jQuery plugin to display, flip and switch flashcards

See the demo live: https://googledrive.com/host/0Bxs8rr1Ng7TqaFZRWEhwdTFUc1E/index.html

##Usage

###Initialization

> $('#container').flashcards({
>   option1: value1,
>   option2: value2,
>   ...
> });

None of the options is required. If nothing is supplied, predefined
defaults are used. Available options include:

* questionSide = 'front' | 'back'
  Side of the card that contains the  question and is displayed first
  for any new card
* headGenerator = function(side, value, hint)
  Function for generating the text to be displayed in the card's head
* footGenerator = function(side, value, hint)
  Function for generating the text to be displayed in the card's foot
