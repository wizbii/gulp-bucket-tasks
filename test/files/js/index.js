const foo = 'bar';

function quz (...args) {
  return baz(...args);
}

function baz (messages) {
  messages.forEach((message) => console.log(message));
}
