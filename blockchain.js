


const Block = require("./block");

class Blockchain{
    consturtor(){
        // Array m. Genesis-Block [0]
        this.chain = [Block.genesis()];
    }

addBlock(){
    const lastBlock = this.chain[this.chain.length - 1];
    const block = new Block.mineBlock(lastBlock, blockData);
    this.chain.push(block);
}



}

// Export
module.exports = Blockchain;