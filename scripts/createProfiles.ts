import { use } from "chai";
import { ethers, getNamedAccounts, deployments } from "hardhat";
import user_Address from "./runTimeAddressess";
import { eAES, dAES } from "./AES_hashs";
import { userData } from "./userData";
async function main() {
  const { deployer } = await getNamedAccounts();
  const { log } = deployments;

  const profiles = await ethers.getContract("Profiles", deployer);
  // console.log(`Got contract profiles at ${profiles.address}`);
  let i = 0;
  console.log("...............................................");
  while (i < user_Address.length) {
    const createProfile = await profiles.createProfile(
      user_Address[i],
      await eAES(JSON.stringify(userData[i]))
    );
    console.log(`User Created with ${user_Address[i]}`);
    i++;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
