# jpmfaucet-contracts
Smart contract that holds an ERC20 token and provides `getTokens` method to claim free tokens.


### Constructors
1. `_erc20ContractAddress`: The address of the ERC20 token the faucet holds.

2. `_maxAllowanceInclusive`: The maximum amount (inclusive) allowed to claim.  This can be changed later via `setMaxAllowance`.


### Example

##### JPM faucet on Mainnet used for JPM Coin Faucet
- This smart contract is deployed on the Mainnet network https://etherscan.io/address/0x5de050b07a5f71fb72f976782913c290bb88d6d0 

##### How to get free JPM on Main Network
- Add JPM token address [0x4976fb64d3fdcce53cc4b3a3f6e2fb6b0a687efb](https://etherscan.io/token/0x4976fb64d3fdcce53cc4b3a3f6e2fb6b0a687efb) on Mainnet to Metamask following this [handy guide](https://docs.google.com/document/d/1rnJPZBstpzyMUZ_DGDTFeXeI037eg1dpA31X7egq4Lo/edit#heading=h.nidysogysmaf).
- To claim free JPM Coin, copy and paste `./scripts/getTokens.js` raw content into Chrome's console that is connected to Metamask on Mainnet. The default amount to claim in the script is 1 JPM You can change the value of `amountToClaim` in the script to the amount you want to claim but the maximum amount allowed is `_maxAllowanceInclusive`.
- Submit the transaction in the Metamask popup modal.
- The amount of claimed JPM Coin should be displayed on Metamask once the transaction is mined on Mainnet.


### License
[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)
