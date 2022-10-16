// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  //有关联的library，需要先部署,然后再在主合约link
  //这个库合约必须要有public函数可供外部调用，不能使用函数全为internal的库合约(因为internal的库合约无法导出)。
  // const LibMath = await hre.ethers.getContractFactory("Math");
  // const math = await LibMath.deploy();

  // const XENCrypto = await hre.ethers.getContractFactory("XENCrypto",{
  //   libraries: {
  //     Math: math.address
  //   }
  // });

  // const x = await XENCrypto.deploy();
  // await x.deployed();

  // console.log(
  //   `address:${x.address}` //0xce72b3814A2D66c1a57BB15545B740BdD27dF321
  // );

    //http://goerli.etherscan.io/address/0x9C405468b9B6D4250CE1C395D50d0Ed7cAA3d59e#code
    const GetXen = await hre.ethers.getContractFactory("GETXEN");
    const xen = await GetXen.deploy();
    await xen.deployed();
    console.log(
       `address:${xen.address}` //0x9C405468b9B6D4250CE1C395D50d0Ed7cAA3d59e
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
