import {ethers} from "hardhat";
import {Token} from "../typechain-types";

const main = async () => {
    const TokenFactory = await ethers.getContractFactory("Token");
    const token = TokenFactory.attach("0xDD130Bd4A23CF56E3E8412299513787BcAcF96fB") as Token;
    await token.buyToken({ value: ethers.parseEther("1") });
}

main();