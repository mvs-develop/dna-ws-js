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
    Metaverse: {
      address_prefix: "DNA",
      chain_id: "93b266081a68bea383ef613753a9cafaa01b3b7b04ed00a01e5dec5de8cb4983",
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
