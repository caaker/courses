// improvement 1 - use native node library
const crypto = require('node:crypto');

class Block {
  constructor(index, timestamp, data, previous_hash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previous_hash = previous_hash;

    // not in parameter list, create it based on previous hash and data - do you actually need data or just previous hash?
    this.hash = this.calculateHash();
  }
  calculateHash() {
    const hash = JSON.stringify(this.data) + this.previous_hash;
    return crypto.createHash('sha256').update(hash).digest('hex');
  }
}

class BlockChain {
  // improvement 2 - remove single use method
  constructor() {
    const first_block = new Block(0, '01/01/1970', 'block0_data', 0);
    this.chain = [first_block];
  }
  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(block) {
    block.previous_hash = this.getLastBlock().hash;
    block.hash = block.calculateHash();
    this.chain.push(block);
  }
  isChainValid() {
  }
}

const blockchain = new BlockChain();
blockchain.addBlock(new Block(1, '01/01/1971', 'block1_data'));
blockchain.addBlock(new Block(2, '01/01/1972', 'block2_data'));
console.log(blockchain.chain);