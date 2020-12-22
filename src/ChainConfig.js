var config = {
  core_asset: "CORE",
  address_prefix: "GPH",
  expire_in_secs: 15,
  expire_in_secs_proposal: 24 * 60 * 60,
  review_in_secs_committee: 24 * 60 * 60,
  networks: {
    BitShares: {
      core_asset: "BTS",
      address_prefix: "BTS",
      chain_id:
        "4018d7844c78f6a6c41c6a552b898022310fc5dec06da467ee7905a8dad512c8"
    },
    MetaverseTestnetUdrur: {
      address_prefix: "DNA",
      chain_id: "8278e1c46cffb419eca1f7032210be9ecc5eccebb30bed66b8aafaf431b04ce7",
      core_asset: "DNA"
    },
    MetaverseTestnet: {
      address_prefix: "DNA",
      chain_id: "19969b8cd3c7f00520722c08f97cebe80bb4443098e76726119c767d59354333",
      core_asset: "DNA"
    },
    MetaverseMainnet: {
      address_prefix: "DNA",
      chain_id: "24938a99198d850bb7d79010c1325fb63fde63e8e477a5443ff5ce50ab867055",
      core_asset: "DNA"
    }
  },

  /** Set a few properties for known chain IDs. */
  setChainId: chain_id => {
    let result = Object.entries(config.networks).find(
      ([network_name, network]) => {
        if (network.chain_id === chain_id) {
          config.network_name = network_name;

          if (network.address_prefix) {
            config.address_prefix = network.address_prefix;
          }
          return true;
        }
      }
    );

    if (result) return { network_name: result[0], network: result[1] };
    else console.log("Unknown chain id (this may be a testnet)", chain_id);
  },

  reset: () => {
    config.core_asset = "CORE";
    config.address_prefix = "GPH";
    config.expire_in_secs = 15;
    config.expire_in_secs_proposal = 24 * 60 * 60;

    console.log("Chain config reset");
  },

  setPrefix: (prefix = "GPH") => (config.address_prefix = prefix)
};

export default config;
