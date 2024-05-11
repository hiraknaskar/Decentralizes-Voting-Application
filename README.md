

# Decentralizes-Voting-Application




## Installation
Install the packages using

```bash
  npm install
```

## Deployment

To deploy this project . . .

First We need to add our private key in .env file.
Then we need to compile the contract.
```bash
  npx hardhat compile
```
After that we need to upload it to the blockchain network. 
```bash
  npx hardhat run --network volta scripts/deploy.js
```
Now the contract is uploaded to the blockchain.

Then we need to add Contract Address Details(ex- 0xeC50992eE005a9CB12aBB8a113E34878532e2B95) in the .env file and constant.js file.

To run on Local:http://localhost:3000
```bash
  npm start
```
