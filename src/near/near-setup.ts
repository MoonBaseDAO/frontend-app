import {
  keyStores,
  Near,
  WalletConnection,
  utils as nearUtils,
} from "near-api-js";

export const CONTRACT_ID = "dev-1643583533233-86904103016460";

let wallet: WalletConnection | null = null;
let contract = null;
const utils = nearUtils;

export const initNear = () => {
  //Testnet config
  const near = new Near({
    networkId: "testnet",
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });

  //Wallet init
  wallet = new WalletConnection(near, "Near Dapp");
};

export const signIn = () => {
  console.log(wallet);
  wallet?.requestSignIn({contractId: CONTRACT_ID});
};

export const signOut = () => {
  wallet?.signOut();
};


//Function for view methods
export const viewFunction = async (functionName: string, args = {}) => {
  const result = await wallet?.account()
    .viewFunction(CONTRACT_ID, functionName, args);

  return result;
};

//Function for call method
export const callFunction = async (functionName: string, args = {}, deposit = "0") => {
  const result = await wallet?.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: functionName,
    args: args,
    attachedDeposit: utils.format.parseNearAmount(deposit),
  });
  return result;
}

export {
  wallet,
  contract,
  utils
}