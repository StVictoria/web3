// https://eth-rinkeby.alchemyapi.io/v2/LmSpeIHZftJBpYTaaQAhrFOvzS-0zN6Z

require("@nomiclabs/hardhat-waffle"); // hardhat-waffle is the plugin to build smart contract tests using waffle in hardhat

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/LmSpeIHZftJBpYTaaQAhrFOvzS-0zN6Z",
      accounts: ["2fe638b62b30fe107c54956a896b33f4dc44ec537176abad90af09546b07e5c3"]
    }
  }
}
