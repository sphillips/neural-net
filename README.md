# Brain.js Neural Net Demo

This app includes demonstrates two approaches to building simple neural networks using the [brain.js](https://brain.js.org/#/) library.

The first (index.js) is a feed-forward neural net which imitates an image compression function. It trains on sets of RGB values for pixels and outputs the likelihood that a given pixel will be converted to black or white.

The second example (recurrent.js) is a recurrent neural net example which can iterate over itself a given number of times. The input is a string sentence and the output determines if the sentiment is happy or sad.