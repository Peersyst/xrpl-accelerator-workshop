import {ethers} from "hardhat";

const main = async () => {
    const TokenFactory = await ethers.getContractFactory("Token");
    const token = await TokenFactory.deploy();
    console.log(`token address ${await token.getAddress()}`)
}

main();