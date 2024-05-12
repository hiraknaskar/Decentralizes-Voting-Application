

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
![Screenshot 2024-05-12 194114](https://github.com/hiraknaskar/Decentralizes-Voting-Application/assets/131425379/1d901167-5f3a-4fbc-8880-7a1fdf6da47b) 
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
## Screenshots
![Screenshot 2024-05-12 104915](https://github.com/hiraknaskar/Decentralizes-Voting-Application/assets/131425379/acb7ae83-9cfb-43f0-9768-bd7392f90c23)
Login page, where you can login with the help of MetaMask
![Screenshot 2024-05-12 104921](https://github.com/hiraknaskar/Decentralizes-Voting-Application/assets/131425379/82bbda56-70f3-43ab-95f9-e539f6bcb78d)
voting page where you can select the candidate.
You have to vote within the remaining time after the time passed you can't vote anymore.
![Screenshot 2024-05-12 105402](https://github.com/hiraknaskar/Decentralizes-Voting-Application/assets/131425379/f0847878-845c-4210-8ca9-754687009a9d)
This is OurAim page.
![Screenshot 2024-05-12 105722](https://github.com/hiraknaskar/Decentralizes-Voting-Application/assets/131425379/50706b39-15f6-4fa0-b65a-208ffbec6e41)
This is contact us page.

WHEN THE REMAINING TIME WILL BE END THEN OUR RESULT PAGE WILL BE OPENED AND WE CANNOT ACCESS THE VOTING PAGE OR LOGIN PAGE ANYMORE .

![Screenshot 2024-05-12 111146](https://github.com/hiraknaskar/Decentralizes-Voting-Application/assets/131425379/a8db345e-08b1-48ad-ae32-01c1562c04ab)

...AND FINALLY THIS IS OUR RESULT PAGE...
