import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "91e8666e70aac0670a686a609f6522470dc945ed629f4d734f0a8b808c9819e9";
const ALCHEMY_SEPOLIA_URL = process.env.ALCHEMY_SEPOLIA_URL || "https://eth-sepolia.g.alchemy.com/v2/yBuBDyxKiJM6lC9guBYzjW6EQdoPvAIQ";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "YB4ATFQXA9X4QM9KTWPAY7G92SX8NBB1ZI";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_URL,
      accounts: PRIVATE_KEY !== "" ? [PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
  },
};

export default config;
