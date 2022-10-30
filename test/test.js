const { expect } = require("chai");

describe("Gitshock", function () {
  it("Should return the new greeting once it's changed", async function () {
    const gitshock = await ethers.getContractFactory("Gitshock");
    const Gitshock = await Gitshock.deploy();

    expect(await gitshock.greet()).to.equal("Hello, fucking world!");

    const setGreetingTx = await gitshock.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await gitshock.greet()).to.equal("Hola, mundo!");
  });
});