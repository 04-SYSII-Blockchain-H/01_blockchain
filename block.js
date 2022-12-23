// Klasse
const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash; // Hash des vorhergehenden Blocks
        this.hash = hash; // Eigener Hash
        this.data = data; // Daten
    }

    toString(){ // für Debugging-Zwecke
        return `Block -
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash}
        Hash:       ${this.hash}
        Data:       ${this.data}`
    }


    static genesis(){
        return new this("Genesis time","----","xAbC20",["data1","data2"]);
     }


    static mineBlock(lastBlock, ownData) { // weitere Blocks in der Chain
        const timestamp = Date.now(); // Zeit im ms seit 01.01.1970
        const lastHash = lastBlock.hash; // Hashwert des Vorgängers
        const hash = "ownHash";

        return new this(timestamp, lastHash, hash, ownData); // call constructor
     }

}

module.exports = Block; // Export als Modul