const FundraiserFactoryContract = artifacts.require('FundraiserFactory')

contract('FundraiserFactory: deployment', () => {
	it('has been deployed', () => {
		const fundraiserFactory = FundraiserFactoryContract.deployed()
		assert(fundraiserFactory, 'fundraiser factory was not deployed')
	})
})

contract('FundraiserFactory: createFundraiser', accounts => {
	let fundraiserFactory
	// fundraiser args
	const name = 'Beneficiary Name'
	const url = 'beneficiaryname.org'
	const imageURL = 'https://placekitten.com/600/350'
	const bio = 'Beneficiary description'
	const beneficiary = accounts[1]

	it('increments the fundraiserCount', async () => {
		fundraiserFactory = await FundraiserFactoryContract.deployed()
		const currentCount = await fundraiserFactory.fundraiserCount()
		await fundraiserFactory.createFundraiser(name, url, imageURL, bio, beneficiary)
		const newCount = await fundraiserFactory.fundraiserCount()
		assert.equal(1, newCount - currentCount, 'should increment by 1')
	})

	it('emits the FundraiserCreated event', async () => {
		fundraiserFactory = await FundraiserFactoryContract.deployed()
		const tx = await fundraiserFactory.createFundraiser(name, url, imageURL, bio, beneficiary)
		const expectedEvent = 'FundraiserCreated'
		const actualEvent = tx.logs[0].event
		assert.equal(actualEvent, expectedEvent, 'events should match')
	})
})
