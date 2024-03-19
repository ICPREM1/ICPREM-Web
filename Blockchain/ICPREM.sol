// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";




contract Fees_General is   ERC721, Ownable {
  Payer [] public payer;
  using Strings for uint256;

  string baseURI;
  uint256 cost = 0.05 * 10 ** 18; //Price is to be determined by HTTPS Calls, that was not available so we improvised.
  string public baseExtension = ".json";
  bool public paused = false;
  bool public revealed = false;
  string public notRevealedUri;

  constructor (
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI,
    string memory _initNotRevealedUri,
    address initialOwner
   ) ERC721(_name, _symbol) Ownable(initialOwner)
   {
    setBaseURI(_initBaseURI);
    setNotRevealedURI(_initNotRevealedUri);
  }


 struct Payer{ 
  string Name;
  string Department;
  string  Level;
  address fromAddress;
} 
 
/**
 * @dev Returns the details of the payer based on the provided tokenId.
 * @param tokenId The unique identifier of the payer.
 * @return A structure containing the name, department, level, and address of the payer.
 */
 // Details starts from 1. Note no zeroth index.
  function Details(uint tokenId) public view returns (Payer memory){
    uint number = tokenId - 1;
    require (number < payer.length, "invalid entry");
    return payer[number];
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

/**
 * @dev Mints a new token with the provided details of the payer.
 * @param prefName The name of the payer.
 * @param _Department The department of the payer.
 * @param _Level The level of the payer.
 */
  function mint( string memory prefName, string memory _Department, string memory _Level ) public payable {
   require(!paused);
   require(msg.value >= cost, "Not enough to pay fees, add more money");
   require(balanceOf(msg.sender) <= 0, "Pay only once");
   payer.push(Payer({Name: prefName, Department : _Department, Level : _Level, fromAddress : msg.sender}));
   uint256 tokenId;
   _safeMint(msg.sender, tokenId);
  }

  function reveal() onlyOwner public {
     revealed = true;
  }

  function setNotRevealedURI(string memory _notRevealedURI) onlyOwner public  {
  notRevealedUri = _notRevealedURI;
  }

  function setBaseURI(string memory _newBaseURI) onlyOwner public  {
   baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) onlyOwner public  {
    baseExtension = _newBaseExtension;
  }

  function pause(bool _state) onlyOwner public  {
    paused = _state;
  }
 
  function withdrawMoney() public onlyOwner {
    address payable to = payable(msg.sender);
    to.transfer(address(this).balance);
  }

}