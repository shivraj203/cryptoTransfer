require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/K-ggUAgF7uLq7Y4oUsMu3OrfjkVkK24K' ,
      accounts: ['fdc4376165f700d82cb379a885634c358731a7b6e71410cc059b8d107ffa2c27'] ,
    },
  },
};