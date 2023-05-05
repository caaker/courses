const crypto = require('node:crypto');

class Block {

  constructor(index, timestamp, data, previous_hash = '') {

    // passed in by constructor
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previous_hash = previous_hash;

    // new property uses crypto library to create a hash
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto.createHash('sha256').update(JSON.stringify(this.data) + this.previous_hash).digest('hex');
  }

}

class BlockChain {

  constructor() {
    const first_block = this.createFirstBlock();
    this.chain = [first_block];
  }

  createFirstBlock() {
    return new Block(0, '01/01/1970', 'block0', 0)
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

blockchain.addBlock(new Block(1, '01/01/1971', 'block1'));
blockchain.addBlock(new Block(2, '01/01/1972', 'block2'));

console.log(blockchain.chain);