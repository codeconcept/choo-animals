// import choo
var choo = require('choo')

// choo's template helper
var html = require('choo/html');

// import template
var main = require('./templates/main.js');

// initialize choo
var app = choo()

app.use(function (state, emitter) {
  // init state
  state.animals = [
    {type: 'lion', x: 200, y: 100},
    {type: 'crocodile', x: 50, y: 300}
  ];
  
  // add animal
  emitter.on('addAnimal', function(data) {
    var animals = ['crocodile', 'koala', 'lion', 'tiger', 'walrus'];
    var type = Math.floor(Math.random() * 5)
    var x = data.x
    var y = data.y
    
    var obj = {type: animals[type], x: x, y: y}
    state.animals.push(obj)
    
    emitter.emit('render')
  })
  
  // remove animal
  emitter.on('removeAnimal', function(i){
    state.animals.splice(i, 1)
    emitter.emit('render')
  })
})

// home route
app.route('/', main);

// parameterized route
app.route('/filter/:type', main)

// start app
app.mount('div')

