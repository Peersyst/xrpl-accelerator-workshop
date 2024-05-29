import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    evmSidechain: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      accounts: ["14106b40052bfd967e4b060eef9e54197c61f2169c0df8f486c5e5cf0e0f13a2"]
    }
  }
};

export default config;
