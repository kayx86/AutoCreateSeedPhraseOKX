import { bip39, BigNumber } from "@okxweb3/crypto-lib";
import { promises as fs } from 'fs';

async function generateAndSaveMnemonics(limitSeedPhrase) {
    let seedPhrase = {};

    for (let i = 0; i < limitSeedPhrase; i++) {
        let mnemonic = await bip39.generateMnemonic();
        let accountName = "OKX" + i;
        seedPhrase[accountName] = mnemonic;
    }

    let data = JSON.stringify(seedPhrase, null, 2);

    fs.writeFile('seedPhrases.txt', data, (err) => {
        if (err) {
            console.error('Error when save SeedPhrase', err);
        } else {
            console.log('Done!');
        }
    });
}

var limitSeedPhrase = 1000 // You can change this number if you want 
generateAndSaveMnemonics(limitSeedPhrase);
