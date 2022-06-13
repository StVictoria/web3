// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
  uint256 transactionCount;
  
  event Transfer(address from, address reciever, uint amount, string message, uint256 timestamp, string keyword);
  
  struct TransferStruct {
    address sender;
    address reciever;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }
  
  TransferStruct[] transactions;
  
  function addToBlockchain(address payable reciever, uint amount, string memory message, string memory keyword) public { // memory - specific data stored in the memory of that transaction
    transactionCount += 1;
    transactions.push(TransferStruct(msg.sender, reciever, amount, message, block.timestamp, keyword));
    // msg: we immidiatelly get whenever we call specific function in the blockchain. It's already gonna to be stored there
    // block: was being excecuted on the blockchain
    emit Transfer(msg.sender, reciever, amount, message, block.timestamp, keyword);
  }
  
  function getAllTransactions() public view returns (TransferStruct[] memory) {
    return transactions;
  }
  
  function getTransactionCount() public view returns (uint256) {
    return transactionCount;
  }
  
  
  // function recieveAndSend(address payable _to) external payable {
  //   uint amount = msg.value;
  //   _to.transfer(amount);
  // }
}