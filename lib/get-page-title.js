/* eslint-env browser */
module.exports = getPageTitle

function getPageTitle() {
  return document.querySelector('title').textContent
}
