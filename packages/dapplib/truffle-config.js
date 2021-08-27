require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain hospital grid gloom symptom stadium'; 
let testAccounts = [
"0x10115278621c80731f2f473f4d3fef95a6b3e82c54c506eda1532c2a4b0afd5b",
"0xb43fda415c84e0d1577374b8550b874daa5dcb94b5b791b01d80d6090b623229",
"0xea15cb111cdd05ba4bdc2d8f9ce1008f5110bcf23e37c02d75c1503fc41646b3",
"0x1d647784dffb13474ea727f0eecd3089288e831ac7553debb86633fd15b24c46",
"0x070ba538c69181df44d0cd8dcf3be3654476c88e1865bc793c412d1764d9a251",
"0x69515861f2a2df3edf3b1d88a103338fdbb6d07124abf26e0349b6b49e18617b",
"0xd7879e78d51627ae1f597c32ea48f2708d665372236aedf2aaf58960e7e1751f",
"0x13736fad11fda171b70d8aad9c3c584a679d12191128f59b65c9e8d1561ccce2",
"0x8b591cb21038dc68354b5303255795cd1257acddaee42b06e57cd831afaaadf1",
"0x77e08a6964d24c350459030f8b5bfb1104eb548f92c661135e428e56347dc798"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


