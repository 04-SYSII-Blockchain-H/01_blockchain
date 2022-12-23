// call: npm run dev-test


// console.log("Pause");


// Import
const Block = require("./block");
//const SHA256 = require('crypto-js/sha256');

/**  Test der Block-Funktionalität */
// const block = new Block("aktuelle Zeit", "hash1", "hash2", "meineDaten");
// console.log(block.toString());

//console.log(Block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(), "testData");
console.log(testBlock.toString());