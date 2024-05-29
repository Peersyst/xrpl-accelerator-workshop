pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("XRPL Accelerator Token", "XAT") {}

    function buyToken() public payable {
        require(msg.value > 0, "You must send XRP to get tokens");
        _mint(msg.sender, msg.value);
    }
}
