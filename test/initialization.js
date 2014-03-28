test('initialization with defaults', function() {
  var $fixture = $('#qunit-fixture');
  
  $fixture.flashcards();
  
  strictEqual($fixture.data('settings').questionSide, "front",
    'question side initialized with default value');
});

test('initialization with parameters', function() {
  var $fixture = $('#qunit-fixture');
  
  $fixture.flashcards({
    questionSide: "back"
  });
  
  strictEqual($fixture.data('settings').questionSide, "back",
    'question side initialized with specified parameter');
});
