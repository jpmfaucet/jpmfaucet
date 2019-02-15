// Example code on how to claim TRST on Rinkeby
// Copy and paste this snippet to Chrome's console that is connected to MetaMask on Rinkeby
// 

const deployedAddress = "0x9Bc14c55139501643B62d49c9E8dEF17029Ad418";
const amountToClaim = 1000000; // 1 TRST

const abi = 
[{"constant":false,"inputs":[],"name":"reclaimTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxAllowanceInclusive","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_maxAllowanceInclusive","type":"uint256"}],"name":"setMaxAllowance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"erc20Contract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"claimedTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"isPaused","type":"bool"}],"name":"setPause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"getTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_erc20ContractAddress","type":"address"},{"name":"_maxAllowanceInclusive","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"GetTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"tokenAmount","type":"uint256"}],"name":"ReclaimTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"setter","type":"address"},{"indexed":false,"name":"newState","type":"bool"},{"indexed":false,"name":"oldState","type":"bool"}],"name":"SetPause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"setter","type":"address"},{"indexed":false,"name":"newState","type":"uint256"},{"indexed":false,"name":"oldState","type":"uint256"}],"name":"SetMaxAllowance","type":"event"}];
const faucet = web3.eth.contract(abi).at(deployedAddress);

faucet.getTokens(amountToClaim, function (err, success) {
  if (err || !success) throw new Error(err || 'getTokens returned false');
});
