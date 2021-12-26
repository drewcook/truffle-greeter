# Solidity Smart Contract Development for Ethereum

This is a repo for my source source code as I work through [this book](https://www.oreilly.com/library/view/hands-on-smart-contract/9781492045250/).

Original source code for the book is hosted at this [repo](https://github.com/RedSquirrelTech/hoscdev).

Both of these projects are built with the [Truffle framework](https://trufflesuite.com/) for smart contract development, deploying, migrating, and testing.

## Dependencies

Some projects use dependencies, including [OpenZeppelin](https://openzeppelin.com/) as a source for smart contract inheritance, and therefore would need to be installed prior to working with the project. Each project maintains their own `package.json` and dependencies.

Install them with NPM:

```bash
cd greeter # if running greeter
cd fundraiser # if running fundraiser
npm install
```

## Fundraisers

The `./fundraiser` directory holds the smart contract and front end code for a fundraisers application run on a blockchain.  The app shows a number of fundraisers that users can donate to for the particular cause. You can create fundraisers for other users to donate to, and you may act as a custodian to withdraw all the fundraiser donations and transfer them to the beneficiary who created it.

The `FundraiserFactory` smart contract handles creating new fundraisers and paginating between them.  It calls logic held in the Fundraiser smart contract for each particular fundraiser. This contract uses the factory pattern to create, store, and work with a collection of Fundraiser smart contracts.

Each `Fundraiser` smart contract will hold all the funds of the donations, and a custodian may act on the behalf of a beneficiary to withdraw the funds and deposit them directly into the beneficiary's wallet address. The custodian may also set the beneficiary account.  The custodian defaults to the deployer of the contract.

### Deploy the contracts

Deploy the contracts to the client application and connect to a local network. Use a tool like [Ganache](https;//trufflesuite.com/ganache) to spin up a local blockchain, then deploy the fundraiser contracts by deploying to the development network configured in `truffle.config.js`.  You may update this to be your own local host of your choice.

Ensure your local blockchain network is running and that `truffle.config.js` is up to date with the config, then run the following:

```bash
cd fundraiser # if not in fundraiser dir already
truffle migrate --network develop
```

## Client App

The front end is a React application that holds the contracts built from the root directory. The client app is located in `./cliet`. Install the dependencies with:

```bash
cd client
npm i
```

### Build the client app

Ensure you have a browser wallet installed and accounts connected to your local blockchain that you've spun up, and then start up the client application to interact with the fundraisers.  The app should spin up on `localhost:3000`.

```bash
cd client # if not in client dir already
npm start
```

Now you should have a local instance of this fundraiser app, connected to your own local blockchain with your own test wallets, and you can create new fundraisers and interact with them by making donations to the causes, all stored on the blockchain.
