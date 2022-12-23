// call: npm run dev-test

// Import
const Block = require("./block");
const Blockchain = require("./blockchain");

/***  Test der Block-Funktionalität  */
// const block = new Block("aktuelle Zeit","hash1","hash2","meineDaten");
// console.log(block.toString());

// console.log(Block.genesis().toString());

// const testBlock = Block.mineBlock(Block.genesis(),"testData");
// console.log(testBlock.toString());

/***  Test der Blockchain-Funktionalität  */
const chain = new Blockchain();
console.log(chain);

chain.addBlock("Daten von Block 1");
console.log(chain);

chain.addBlock("Daten von Block 1");
console.log(chain);

chain.addBlock("Daten von Block 1");
console.log(chain);

chain.addBlock("Daten von Block 1");
console.log(chain);