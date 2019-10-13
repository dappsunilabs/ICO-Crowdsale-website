var myAccounts;
var myDappsUniEthereumNode= "ether.chainapp.live:7852";

if (typeof web3 !== 'undefined') {
     // Use Mist/MetaMask's provider
     web3 = new Web3(web3.currentProvider);
     //console.log(web3.currentProvider);
     
     console.log("You are connected to MetaMask");
}
else {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://"+myDappsUniEthereumNode));
    var eventProvider = new Web3.providers.WebsocketProvider("ws://"+myDappsUniEthereumNode);
    //console.log('no metamask');
}
var eventProvider = new Web3.providers.WebsocketProvider("ws://"+myDappsUniEthereumNode);
var web3ws=new Web3(eventProvider); 

var contractAddress="0x1c854adec6a74cdf1b96c0b5d1c69e010ec1f7eb";

var abi=[
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "startDate",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "from",
                "type": "address"
            },
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "tokens",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "_totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "bonusEnds",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "tokenOwner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "acceptOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "tokens",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "endDate",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "newOwner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "_ownerSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "hardCap",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "tokenOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    }
]


var hardCap=0;
var totalSupply=0;
var TokenContract = new web3ws.eth.Contract(abi,contractAddress);
//console.log(TokenContract);
TokenContract.methods._totalSupply().call((err, result) => {
    //console.log('totalSupply is: ', result);
    totalSupply=result;
});
TokenContract.methods.hardCap().call((err, result) => {
    //console.log('hardCap is: ', result);
    hardCap=result;
});
       
var transferEvent= TokenContract.events.Transfer((err, events)=>{
        //console.log(err, events)
    }) 

const subscriptionBH = web3ws.eth.subscribe('newBlockHeaders', function(error, result){
        if (!error) {
            //console.log(result.number);
            return;
        }

        console.error(error);
    })

    .on("data", function(blockHeader){
        getcontract();
    })
    .on("error", console.error); 

function getcontract(){
    var myContractEventsList= document.getElementById("myContractEventsList");
    contractAddress=document.getElementById('queryContract').value;
    
    TokenContract = new web3ws.eth.Contract(abi,contractAddress);
    //console.log(TokenContract);
    var transferEvent= TokenContract.events.Transfer((err, events)=>{
        //console.log(err, events)
        var node = document.createElement("LI");
        var textnode = document.createTextNode(JSON.stringify(events,null,2));
        node.appendChild(textnode);
        myContractEventsList.appendChild(node);
    })

    var currentContract= document.getElementById("currentContract");
    var textnode2 = document.createTextNode("Now monitoring contract @ address: "+ contractAddress);
    currentContract.innerHTML='';
    currentContract.appendChild(textnode2);
    TokenContract.methods.hardCap().call((err, result) => {
        ////console.log('hardCap is: ', result);
        hardCap=result;
        TokenContract.methods._totalSupply().call((err, result) => {
            //console.log('totalSupply is: ', result);
            totalSupply=result;
            move(hardCap,totalSupply);
        });
        
    });

}


async function purchaseICO(){
    var tx= document.getElementById('purchaseICOfromaddress').value;
    //console.log(tx);
    var addr=tx.split(",")[0];
    var val=tx.split(",")[1];
    //console.log(TokenContract);
    
    //TokenContract.methods.get().call((err, result) => { console.log(result) })
    var fromAddr= document.getElementById('purchaseICOfromaddress').value;
    //TokenContract.depositFunds.send({from: web3.eth.accounts[1], gas: 3000000, value: 1}, function(err, res){console.log(result);});
    //TokenContract.transfer(toAddress, { value: web3.toWei('1', 'ether'), from: web3.eth.accounts[1] })
    one_eth = web3.utils.toWei(val, "ether");
    web3.eth.sendTransaction({gasLimit: 3141592 ,from: addr, to: contractAddress, value: one_eth});
    
    getcontract();

    alert('purchase complete');
}

//Progressbar movement
function move(hardCap,totalSupply) {
  //console.log("move called with hardcap:",hardCap, " total: ", totalSupply);
  var elem = document.getElementById("colorbar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 95) {
      clearInterval(id);
    } else {
      width= totalSupply/hardCap*100; 
      if(width>=95){
        width=95;
      }
      //console.log("width is calculated as: ",width);
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1 + '%';
      var elem2 = document.getElementById("ICO_status");
      var newValue= totalSupply/10**18 + " / "+ hardCap/10**18+ " tokens";
      elem2.innerHTML = "ICO Progress: " + totalSupply/10**18 + " / "+ hardCap/10**18+ " tokens"; 
    }
  }
}
