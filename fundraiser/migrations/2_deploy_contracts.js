const FundraiserContract = artifacts.require('Fundraiser')

// TODO: use FundraiserFactory to create a Fundraiser contract to deploy
const name = 'Beneficiary Name'
const url = 'beneficiaryname.org'
const imageURL = 'https://placekitten.com/600/350'
const description = 'Beneficiary description'
const beneficiary = accounts[0]
const custodian = accounts[1]

const fundraiser = FundraiserContract.new(name, url, imageURL, description, beneficiary, custodian)

module.exports = deployer => {
	deployer.deploy(fundraiser)
}
