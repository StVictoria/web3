# Solving the problem with deprecated networks

Test networks often get deprecated and these steps should work for any new network.

>I was trying to migrate from ropsten to rinkeby.
>Hope it will help those who faced the same problem

  

1. Open metamask and choose Rinkeby Test Network

2. Get some ETH from rinkeby faucet for your account (e.g. at [this faucet](https://rinkebyfaucet.com/))

3. Create the App on Alchemy choosing - Chain: Ethereum, Network: Rinkeby

4. Copy HTTP key of this app

  

>You can check `module.exports` by path `smart_contracts/hardhat.config.js` in this project for next steps:

  

5. Define rinkeby (INSTEAD of ropsten) in networks in `hardhat.config.js` (just like in the video)

6. Paste the HTTP key in `url` (follow the video too)

7. Take the private key from your account, paste into `accounts` (make sure, you are in rinkeby test network)

  

8. Deploy the contract using rinkeby network flag (`npx hardhat run scripts/deploy.js --network rinkeby`)

9. Try to send some ethers to second account :)