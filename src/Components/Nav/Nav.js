import React,{useState, useEffect} from 'react';
import './Nav.css';
import { RiTwitterLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { FaDiscord , FaTimes , FaBars } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';
import logo from '../../Assets/Logo.png'

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

let web3Modal;
function init() {
  console.log("initializing . . .");

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
            56: 'https://bsc-dataseed1.defibit.io/',
         },
         network: 'binance',
      },
    },
  };
  web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: false,
    providerOptions,
  });
}

export const Nav = () => {
    const [showAddr, setShowAddr] = useState("");
    const [menuBtn, setMenuBtn] = useState(false);
  
    function showAddress(num) {
      const firstAddressPart = shortener(num, 0, 6);
      const lastAddressPart = shortener(num, 36, 42);
      return `${firstAddressPart}...${lastAddressPart}`;
    }
  
    const shortener = (_data, _start, _end) => {
      let result = "";
      for (let i = _start; i < _end; i++) result = [...result, _data[i]];
  
      return result.join("");
    };
  
  
    async function getMetamaskWallet() {
      let provider;
      try {
        provider = await web3Modal.connect();
        provider.on("accountsChanged", () => {
          console.log("Disconnected or Account Changed !");
          main();
        });
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
      }
      let metamask;
      try {
        metamask = new ethers.providers.Web3Provider(provider, 56);
      } catch (e) {
        console.log(e);
        return null;
      }
      // Prompt user for account connections
      return metamask.getSigner();
    }
  
    async function main() {
      let signer;
      let addr;
      signer = await getMetamaskWallet();
      if (signer) {
        addr = await signer.getAddress();
        setShowAddr(showAddress(addr));
        // MenuToggle();
      }
    }
  
    const MenuToggle = () => menuBtn ? setMenuBtn(false) : setMenuBtn(true);

  
    useEffect(() => {
        localStorage.clear()
      init();
    }, []);
    return (
        <nav>
           <div className="nav container flex-between">
           <div className="logo"><img src={logo} alt="logo" /></div>
           <button onClick={MenuToggle} className="menu flex-center">{menuBtn ? <FaTimes /> : <FaBars />}</button>
            <div style={{top: `${menuBtn ? "0" : "-350px"}`}} className="flex menus">
            <div className="nav_links flex">
                <a onClick={MenuToggle} href="#story" className="link">Home</a>
                <a onClick={MenuToggle} href="#story" className="link">Origin Story</a>
                <a onClick={MenuToggle} href="#roadmap" className="link">Road map</a>
                <a onClick={MenuToggle} href="#team" className="link">Team</a>
            </div>
            <div className="social_links flex">
            <a onClick={MenuToggle} href="#" className="s_link flex-center"><RiTwitterLine /></a>
            <a onClick={MenuToggle} href="#" className="s_link flex-center"><FaDiscord /></a>
            <a onClick={MenuToggle} href="#" className="s_link flex-center"><BsInstagram /></a>
            <a onClick={MenuToggle} href="#" className="s_link flex-center"><GiSailboat /></a>
            </div>

            <button onClick={showAddr ? console.log('connected') : main} className="connect flex">{showAddr ? showAddr :"connect wallet"}</button>
            </div>
           </div>
        </nav>
    )
}
