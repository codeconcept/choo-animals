var html = require('choo/html')

module.exports = function(onclick, animal, i){
  var type = animal.type
  var x = animal.x
  var y = animal.y
  
  return html`
    <img src="/assets/${type}.gif" 
      onclick=${onclick} 
      id=${i}
      style="left: ${x}px; top: ${y}px" />
  `
}