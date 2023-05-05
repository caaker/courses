const tf = require('@tensorflow/tfjs');
const fs = require('fs');

// read in text
const text = fs.readFileSync('input.txt', 'utf8');

// create a set
const set = new Set(text);

// deconstruct the set into array
const arr = [... set]

// sort the array
const arr_sorted = arr.sort();

// create conversion hash tables and encode / decode functions based on set of inputs
const stoi = arr_sorted.reduce((map, ch, i) => (map[ch] = i, map), {});
const itos = arr_sorted.reduce((map, ch, i) => (map[i] = ch, map), {});
const encode = (s) => s.split('').map((c) => stoi[c]);
const decode = (a) => a.map((i) => itos[i]).join();

const data = tf.tensor1d(encode(text), 'int32');

// create train data and validation data with 90 / 10 ratio
const length = data.shape[0];
const index = parseInt(length * .9);
const train_data = data.slice([0], [index]);
const val_data = data.slice( [index] );

// set the block size and batch size for computation
const block_size = 8;
const batch_size = 4;

const seed = 1337;
const device = tf.getBackend() === 'webgl' ? 'gpu' : 'cpu';

// get 4 random integers to use as start indexes
// take a chunk of 8 elements at each index i and stack these for a tensor of shape(4, 8)
// take a chunk of 8 elements at each index i+1 and stack these for a tensor of shape (4, 8)
function getBatch(type) {
  const data = type === 'train' ? train_data : val_data;
  const ix = tf.randomUniform([batch_size], 0, data.length - block_size, 'int32', seed);
  let x = tf.stack(ix.arraySync().map(i => data.slice(i, i + block_size)));
  let y = tf.stack(ix.arraySync().map(i => data.slice(i + 1, i + block_size + 1)));
  // x = x.buffer().toTensor().to(device); // broken
  return [x, y];
}

getBatch()
