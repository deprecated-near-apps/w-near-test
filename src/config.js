const CONTRACT_NAME = "dev-1613737629894-4341656";

module.exports = function getConfig(isServer = false) {
  let config = {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    CONTRACT_NAME,
  };

  if (process.env.REACT_APP_ENV !== undefined) {
    config = {
      ...config,
      GAS: "200000000000000",
      DEFAULT_NEW_ACCOUNT_AMOUNT: "5",
      contractMethods: {
        changeMethods: [
          "new",
          "storage_deposit",
          "near_deposit",
          "near_withdraw",
          "ft_transfer",
          "ft_transfer_call",
        ],
        viewMethods: [
          "storage_minimum_balance",
          "storage_balance_of",
          "ft_balance_of",
        ],
      },
    };
  }

  if (process.env.REACT_APP_ENV === "prod") {
    config = {
      ...config,
      networkId: "mainnet",
      nodeUrl: "https://rpc.mainnet.near.org",
      walletUrl: "https://wallet.near.org",
      helperUrl: "https://helper.mainnet.near.org",
      CONTRACT_NAME: "near",
    };
  }

  return config;
};
