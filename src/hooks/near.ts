import { Near, WalletConnection, keyStores, utils } from "near-api-js";
import { WALLET } from "../constants";

let near = null;
export let wallet: WalletConnection | null = null;

export const initSDK = async () => {
  near = new Near({
    networkId: WALLET.NETWORK_ID,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: WALLET.NODE_URL,
    walletUrl: WALLET.WALLET_URL,
  });

  wallet = new WalletConnection(near, "MoonBase");
}

export const signIn = async () => {
  await wallet?.requestSignIn({ contractId: WALLET.CONTRACT_ID });
};

export const signOut = () => {
  wallet?.signOut();
}

export const view = async (name: string, args = {}) => {
  const result = await wallet?.account().viewFunction(WALLET.CONTRACT_ID, name, args);
  return result;
};

export const call = async (name: string, args = {}, deposit = "0") => {
  const result = await wallet?.account().functionCall({
    contractId: WALLET.CONTRACT_ID,
    methodName: name,
    args: args,
    attachedDeposit: utils.format.parseNearAmount(deposit),
  });
  return result;
}