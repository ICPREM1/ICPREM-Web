# Blockchain
## Contract
This Solidity code defines a smart contract named `Fees_General` that extends the ERC721 standard for non-fungible tokens (NFTs) and incorporates the Ownable contract from OpenZeppelin for access control. The contract is designed to manage a collection of NFTs, each representing a payer with specific details. Here's a detailed breakdown of the code:

- **License and Solidity Version**: The contract specifies the MIT license and targets Solidity version 0.8.20, indicating compatibility with this version of the Solidity compiler.

- **Imports**: The contract imports the `ERC721` and `Ownable` contracts from the OpenZeppelin library. `ERC721` provides the basic functionality for creating NFTs, while `Ownable` allows for access control, defining an owner with special privileges.

- **Contract Definition**: `Fees_General` inherits from both `ERC721` and `Ownable`, combining their functionalities.

- **State Variables**:
 - `payer[]`: An array of `Payer` structs, each representing a payer with details like name, department, level, and wallet address.
 - `cost`: The cost of minting a new token, set to 0.02 BFT for NUESA Fees, 0.01 BFT for Digitron Fees and 0.05 BFT for SUG Fees in various deployments.
 - `baseExtension`: The file extension for token metadata URIs.
 - `paused`: A boolean indicating whether the contract is paused.
 - `revealed`: A boolean indicating whether the NFTs have been revealed.
 - `notRevealedUri`: A string storing the URI for unrevealed NFTs.

- **Constructor**: Initializes the contract with a name, symbol, base URI, not revealed URI, and an initial owner. It sets the base URI and not revealed URI using internal setter functions.

- **Struct Definition**: Defines a `Payer` struct with fields for name, department, level, and wallet address.

- **Functions**:
 - `Details(uint tokenId)`: Returns the details of a payer based on their token ID.
 - `_baseURI()`: Overrides the internal `_baseURI` function from `ERC721` to return the base URI.
 - `mint(string memory prefName, string memory _Department, string memory _Level)`: Mints a new token for a payer, provided they have not already minted a token and the contract is not paused.
 - `reveal()`: Toggles the `revealed` state, allowing the owner to reveal the NFTs.
 - `setNotRevealedURI(string memory _notRevealedURI)`: Allows the owner to set the URI for unrevealed NFTs.
 - `setBaseURI(string memory _newBaseURI)`: Allows the owner to set the base URI for token metadata.
 - `setBaseExtension(string memory _newBaseExtension)`: Allows the owner to set the file extension for token metadata URIs.
 - `pause(bool _state)`: Allows the owner to pause or unpause the contract.
 - `withdrawMoney()`: Allows the owner to withdraw BFT from the contract.

This contract demonstrates a practical application of ERC721 tokens for representing unique entities (in this case, payers) with associated metadata. It also showcases the use of OpenZeppelin's `Ownable` contract for access control, ensuring that only the contract owner can perform certain actions like revealing NFTs, setting URIs, and withdrawing funds.


## Contract Deployment
Dues to being able to access HTTPS Calls, we had to improve to using  0.02 BFT for NUESA Fees, 0.01 BFT for Digitron Fees and 0.05 BFT for SUG Fees for testing. 
Feel free to interact with the Smart Contracts.


[Digitron Dues](https://explorer.bitfinity.network/token/0x8b88DF64B67B741F97A742480f822FC8a76ff87B)


[NUESA Dues](https://explorer.bitfinity.network/token/0x2118aB4d5381aCE2973f46AD8CCa422e109e7964)


[SUG Dues](https://explorer.bitfinity.network/token/0x8209Ce8F61Ee19ef5CF47fB4f982944b312C9bC8)
