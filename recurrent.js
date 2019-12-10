const brain = require('brain.js')

// Part 2:
// Example using recurrent neural net with string training data
const net = new brain.recurrent.LSTM()

net.train(
  [
    { input: 'I feel great about the world!', output: 'happy' },
    { input: 'The world is a terrible place!', output: 'sad' }
  ],
  {
    iterations: 500,
    log: true
  }
)

const output = net.run('the world is great!') // 'happy'

console.log('result is:', output)
