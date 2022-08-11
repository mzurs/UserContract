//SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;

// Pragma statements
// Import statements
// Interfaces
// Libraries
// Contracts
contract Profiles {
  //Type Declaratio0n
  error USER_EXISTS();
  error USER_NOT_EXISTS();

  //State Variable
  mapping(address => string) private s_userId;
  address private s_userAdmin;

  //Events
  event ProfileCreated(address, string);

  //Modifiers
  modifier ifUserNotExists() {
    _;
  }
  modifier ifUserExists(address _s_userId, string memory hashID) {
    if (
      keccak256(abi.encodePacked((s_userId[_s_userId]))) ==
      keccak256(abi.encodePacked((hashID)))
    ) {
      revert USER_EXISTS();
    }
    _;
  }
  modifier ifAddressNotExsists(address _s_userID) {
    if (
      keccak256(abi.encodePacked((s_userId[_s_userID]))) ==
      keccak256(abi.encodePacked(("0")))
    ) {
      revert USER_NOT_EXISTS();
    }
    _;
  }

  //Functions

  constructor() {
    s_userAdmin = msg.sender;
  }

  function createProfile(address caller, string memory hashID)
    external
    ifUserExists(caller, hashID)
  {
    s_userId[caller] = hashID;
    emit ProfileCreated(caller, hashID);
  }

  function getUserId(address caller)
    external
    view
    ifAddressNotExsists(caller)
    returns (string memory)
  {
    return s_userId[caller];
  }
}
