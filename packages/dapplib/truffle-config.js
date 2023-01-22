require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remind modify good clip success true'; 
let testAccounts = [
"0x4698c439f4197e1796f3d1c5cda5dd755af3779d1df58bfa83d2085eb66d3bbf",
"0x36a26d4c440dcfd71b9841d778ff71a5dc112b7b7ee9c4d6373577235a37ad66",
"0xb6e9aa61158a8c8f725955b99a7d5a26a824673276bd7612ede814ff111af437",
"0x4efca0c42b2b8839d3657cbd2f6916f18d09ad1f543e817c8490d80ebd93a8e6",
"0x472b99dbc111bdcf713238d96e0a119ee05f49656dff8d4f3005af93d61ae65b",
"0x1ba95524df5e36a021fd7fc2d71ba66f62e7324bfd91918ba01c36c697bd4601",
"0x2ca060018279d8646fe5cf522f9f2515e67b2605dac6220803bbd8f760e9f57e",
"0x0dc7e0c3b82225aa0e98b2ebbade5140e55477bceb681cc33387f5ddaf40a352",
"0xc7f89bd6395b312151328fc3e0487efd9f42d5839dcfa40faeee3698cdf14da7",
"0x4c9580191acb1d04b46ed6cebe9ac6a23b8192fd9e2437ef1bab75baa9d0160a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

