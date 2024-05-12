

# Decentralizes-Voting-Application
At our e-voting platform, we strive to revolutionize the way organizational and college-level voting is conducted. Our aim is to provide a secure, transparent, and efficient voting experience powered by blockchain technology.Security is paramount in everything we do. By leveraging blockchain's cryptographic algorithms, we ensure that votes remain confidential and anonymous, protecting the privacy of each voter. Additionally, our platform employs robust encryption techniques to safeguard against cyber threats and attacks

## Technology Used
React Js , Hardhat , Ethers.js , Solidity.

## Installation
Install the packages using

```bash
  npm install
```

## Deployment

To deploy this project . . .

First We need to setup the MetaMask wallet .
Then add volta rpc test token in the wallet.
(Go to https://metaschool.so/rpc/energyWebVoltaTestnet > RPC URL =   https://volta-rpc.energyweb.org   add this to wallet).
After that we need free test tokens, for that we will go to https://voltafaucet.energyweb.org/  .
Now add our private key (MetaMask) in .env file.
Then we need to compile the contract.
```bash
  npx hardhat compile
```
After that we need to upload the contract to the blockchain network. 
```bash
  npx hardhat run --network volta scripts/deploy.js
```
Now the contract is uploaded to the blockchain.
Then, we need to add Contract Address Details(ex- 0xeC50992eE005a9CB12aBB8a113E34878532e2B95) in the .env file and constant.js file.
Reference of .env file:
(API_URL = "https://volta-rpc.energyweb.org/"
PRIVATE_KEY =""
CONTRACT_ADDRESS ="" )

we also can check the smart contract from https://volta-explorer.energyweb.org/  .

To run on Local:http://localhost:3000
```bash
  npm start
```
