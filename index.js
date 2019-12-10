const brain = require('brain.js')

// Part 1:
// Example using a feed-forward neural network
const net = new brain.NeuralNetwork()

const trainingData = [
  { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 } },
  { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } },
  { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 } }
]

net.train(trainingData)

const result = net.run({ r: 1, g: 0.4, b: 0 }) // { white: 0.99, black: 0.002 }
const output = brain.likely(result, net)
