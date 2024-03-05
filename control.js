// let { Web3 } = require("web3");
// let web3;
// // Detect the MetaMask Ethereum provider

// import detectEthereumProvider from "@metamask/detect-provider";

// const provider = await detectEthereumProvider();

// if (provider) {
//   startApp(provider);
// } else {
//   console.log("Please install MetaMask!");
// }

// function startApp(provider) {
//   if (provider !== window.ethereum) {
//     console.error("Do you have multiple wallets installed?");
//   }
// }

// // Prompt users to connect to MetaMask

// const ethereumButton = document.querySelector(".enableEthereumButton");
// const showAccount = document.querySelector(".showAccount");

// ethereumButton.addEventListener("click", () => {
//   getAccount();
// });

// async function getAccount() {
//   const accounts = await window.ethereum
//     .request({ method: "eth_requestAccounts" })
//     .catch((err) => {
//       if (err.code === 4001) {
//         console.log("Please connect to MetaMask.");
//       } else {
//         console.error(err);
//       }
//     });
//   const account = accounts[0];
//   showAccount.innerHTML = account;
// }
// // ABI = [
// //   {
// //     inputs: [
// //       {
// //         internalType: "string",
// //         name: "_milkmanName",
// //         type: "string",
// //       },
// //       {
// //         internalType: "address",
// //         name: "_milkmanID",
// //         type: "address",
// //       },
// //     ],
// //     name: "registerMilkman",
// //     outputs: [],
// //     stateMutability: "nonpayable",
// //     type: "function",
// //   },
// // ];
// // var address = "0xd4344d4523800B5aED6eEb20016CeA1c787C727C";
// // var contract = new web3.eth.Contract(ABI, address);
// // function solve() {
// //   var inputval = document.getElementById("first").value;
// //   var in1 = document.getElementById("last").value;
// //   web3.eth.getAccounts().then(function (account) {
// //     return contract.methods
// //       .registerMilkman(inputval, in1)
// //       .send({ from: account[0] });
// //   });
// // }
let { Web3 } = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
//console.log(web3);
const address = "0x5d94D780939A22190A56f816d870FFBf1D5550fD";
const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_milkmanName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_milkmanID",
        type: "address",
      },
    ],
    name: "registerMilkman",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_milkman",
        type: "address",
      },
    ],
    name: "getMilkmandetails",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const contract = new web3.eth.Contract(abi, address);
//console.log(contract);
// contract.methods
//   .registerMilkman("Chandu", "0xBE2E459898498CE5750cAFdd1BCB4aCAb628ed92")
// //   .send({ from: "0xBE2E459898498CE5750cAFdd1BCB4aCAb628ed92", gas: 400000 });
// contract.methods
//   .getMilkmandetails("0xBE2E459898498CE5750cAFdd1BCB4aCAb628ed92")
//   .call()
//   .then(function (result) {
//     console.log(result);
//   });

const name = document.querySelector(".ethereumButton");

btn.addEventListener("click", getMilkman);
function getMilkman() {
  contract.methods
    .getMilkmandetails("0xBE2E459898498CE5750cAFdd1BCB4aCAb628ed92")
    .call()
    .then(function (result) {
      console.log(result);
    });
}
