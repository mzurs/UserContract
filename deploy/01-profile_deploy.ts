import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"


const deployFundMe: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId: number = network.config.chainId!
  log(deployer)
log("Deploying ..........");
const profiles= await deploy("Profiles",{
  from:deployer,
  args:[],
  log:true

})
  log(`Profiles contract deployed at ${profiles.address}`)

}
export default deployFundMe
deployFundMe.tags = ["all", "profiles"]