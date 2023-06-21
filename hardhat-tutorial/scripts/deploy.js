const hre = require("hardhat");

async function main() {
  const whitelistContract = await hre.ethers.deployContract("Whitelist", [10]);

  await whitelistContract.waitForDeployment();

  console.log("Whitelist Contract Address: ", whitelistContract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
