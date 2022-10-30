const hre = require("hardhat");

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const {ethers} = hre;

    const GitshockRouter = await ethers.getContractFactory("GitshockRouter");
    const gitshockRouter = await gitshockRouter.deploy();

    await Gitshock.deployed();

    console.log('\n*************************************************************************\n')
    console.log(`GitshockRouter Smart Contract Address: ${GitshockRouter.address}`)
    console.log('\n*************************************************************************\n')

    const Gitshock = await ethers.getContractFactory("Gitshock");
    const gitshock = await gitshock.deploy(Gitshock.address);

    await Gitshock.deployed();

    let numTokens = ethers.BigNumber.from(10).pow(18).mul('500000000')
    await Gitshock.transfer(Gitshock.address, numTokens.toString());
    let balance = await Gitshock.balanceOf(Gitshock.address)

    do {
        console.log("Gitshock Contract Balance: ", balance.toString())
        await timeout(5000)
        balance = await Gitshock.balanceOf(Gitshock.address)
    } while (balance != 10 ** 18 * 500000000)

    console.log('\n*************************************************************************\n')
    console.log(`GTFX Smart Contract Address: ${Gitshock.address}`)
    console.log(`GTFX Smart Contract GTFX Balance: ${balance}`)
    console.log('\n*************************************************************************\n')

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });