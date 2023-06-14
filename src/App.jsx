import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Product from "./components/Product";

// ABIs
import Dappazon from "./abis/Dappazon.json";

// Config
import config from "./config.json";

// address
import config from "./config.json";

function App() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    // connest to blockchain
    provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();

    // const address = config[network]["dappazon"][0];
    const address = config[network.chainId].dappazon.address;
    const abi = Dappazon;
    // connect to smart contracts(Create JS Versions)
    const dappazon = new ethers.Contract(address, abi, signerOrProvider);
    setContract(dappazon);
    // Load products
    const items = [];
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <h2>Dappazon Best Sellers</h2>
    </div>
  );
}

export default App;
