test('initialization creates settings', function() {
  var $fixture = $('#qunit-fixture');
  $fixture.flashcards();
  notEqual($fixture.data('settings'), null, 'initialized');
});

test('initialization sets front2back', function() {
  var $fixture = $('#qunit-fixture');
  $fixture.flashcards({
    front2back: true
  });
  strictEqual($fixture.data('settings').front2back, true, 'initialized');
});
