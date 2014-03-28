test('initialization with defaults', function() {
  var $fixture = $('#qunit-fixture');
  
  $fixture.flashcards();
  
  strictEqual($fixture.data('settings').questionSide, "front",
    'question side initialized with default value');
  strictEqual($fixture.data('settings').headGenerator(null, null, null).length, 0,
    'head generator initialized with default value');
  strictEqual($fixture.data('settings').footGenerator(null, null, null).length, 0,
    'foot generator initialized with default value');
});

test('initialization with parameters', function() {
  var $fixture = $('#qunit-fixture');
  
  var questionSide = "back";
  var headGenerator = function() { return 'head' };
  var footGenerator = function() { return 'foot' };
  
  $fixture.flashcards({
    questionSide:  questionSide,
    headGenerator: headGenerator,
    footGenerator: footGenerator
  });
  
  strictEqual($fixture.data('settings').questionSide, questionSide,
    'question side initialized with specified parameter');
  deepEqual($fixture.data('settings').headGenerator, headGenerator,
    'head generator initialized with specified parameter');
  deepEqual($fixture.data('settings').footGenerator, footGenerator,
    'foot generator initialized with specified parameter');
});
