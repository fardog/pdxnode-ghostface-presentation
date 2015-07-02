var test = require('tape')

var returnsTrue = require('../lib/returns-true')

test('module exports a function', function(t) {
  t.plan(1)
  t.ok(
      typeof returnsTrue === 'function'
    , 'is a function'
  )
})

test('returns true', function(t) {
  t.plan(1)

  t.ok(
      returnsTrue() === true
    , 'returned true'
  )
})
