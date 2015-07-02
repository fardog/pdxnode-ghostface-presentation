/* eslint-env browser */
var test = require('tape')

var insertElement = require('../lib/inserts-dom-element')

test('exports a function', function(t) {
  t.plan(1)
  t.ok(
      typeof insertElement === 'function'
    , 'is a function'
  )
})

test('inserts a DOM element', function(t) {
  t.plan(3)

  var el = document.querySelector('body > div')

  t.notOk(
      el
    , 'no element in DOM'
  )

  insertElement()

  el = document.querySelector('body > div')

  t.ok(
      el
    , 'element exists in DOM'
  )
  t.equal(
      el.textContent
    , 'hey buddy!'
    , 'content matches expected text'
  )
})
