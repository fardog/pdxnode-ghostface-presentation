/* eslint-env browser */
module.exports = insertDOMElement

function insertDOMElement() {
  var div = document.createElement('div')
    , text = document.createTextNode('hey buddy!')

  div.appendChild(text)

  document.body.appendChild(div)
}


