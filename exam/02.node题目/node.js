const events = require('events')
const eventEmitter = new events.EventEmitter()

eventEmitter.on('emitted', () => {
  console.log('listened event')
})

eventEmitter.emit('emitted')

