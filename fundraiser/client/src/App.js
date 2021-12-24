import React, { useEffect, useState } from 'react'
import './App.css'
import FundraiserContract from './contracts/Fundraiser.json'
import getWeb3 from './getWeb3'

const App = () => {
	const [web3, setWeb3] = useState(null)
	const [accounts, setAccounts] = useState(null)
	const [contract, setContract] = useState(null)

	useEffect(async () => {
		try {
			// Get network provider and web3 instance.
			const web3Instance = await getWeb3()

			// Use web3 to get the user's accounts.
			const web3Accounts = await web3.eth.getAccounts()

			// Get the contract instance.
			const networkId = await web3.eth.net.getId()
			const deployedNetwork = FundraiserContract.networks[networkId]
			const contractInstance = new web3.eth.Contract(
				FundraiserContract.abi,
				deployedNetwork && deployedNetwork.address,
			)
			// Set web3, accounts, and contract to the state, and then proceed with an
			// example of interacting with the contract's methods.
			setWeb3(web3Instance)
			setAccounts(web3Accounts)
			setContract(contractInstance)
		} catch (error) {
			// Catch any errors for any of the above operations.
			alert(`Failed to load web3, accounts, or contract. Check console for details.`)
			console.error(error)
		}
	}, [])

	console.log({ web3, accounts, contract })

	if (!web3) {
		return <div>Loading Web3, accounts, and contract...</div>
	}

	return (
		<div className="App">
			<h1>Fundraiser DApp</h1>
			<p>Your Truffle Box is installed and ready.</p>
		</div>
	)
}

export default App
