module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", 
      port: 7545, // Ensure this matches your Ganache UI settings
      network_id: "*" // Match any network
    }
  },

  compilers: {
    solc: {
      version: "0.8.19", // Use one version consistently
    }
  },

  mocha: {
    // timeout: 100000
  }
};
