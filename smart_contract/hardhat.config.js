require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/6i5m6uJXaQqxlytzeJBwJM1a_KF-N31s',
      accounts: [
        '8f238bbfc30c2470be0ab3ec377a71405e28a32cb33bab2a8ec18abd06829f32',
      ],
    },
  },
};
