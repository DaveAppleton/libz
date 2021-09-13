pragma solidity ^0.8.0;


import "./libs/mul3.sol";

contract base {
    using mul3 for uint256;

    uint256 myBase;

    constructor(uint h) {
        myBase = h;
    }

    function timesN() external view returns (uint256) {
        return myBase.multiplyByThree();
    }
}