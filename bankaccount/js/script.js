// Create a function called bankAccount that accepts a single parameter: ownerName.
// Add local variables balance and owner. Owner should be set by the incoming parameter.

// VARIABLES


let bankAccount = function () {

  // LOCAL MEMBERS
  let balance = 0;
  let owner = "";

  // REGEX TEST
  let numRegex = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;

  return {
    getBalance: function () {
      if (owner) {
        outputDiv.innerHTML = `Hello! ${owner} <br> <br> Balance: ${balance}`;
      } else {
        outputDiv.innerHTML = `Please enter your name`;
      }
    },
    withdrawalAmount: function () {
        var self = this;
        return function() { // TO USE 'THIS' 
            if (owner) {
              let amount = prompt("Input a withdrawal amount");

              if (numRegex.test(amount)) {
                if (balance >= amount) {
                  balance -= Number(amount);
                  self.getBalance(balance);
                } else {
                  alert(
                    `Error, you do not have enough funds to withdraw ${amount}`
                  );
                  self.getBalance();
                }
              } else {
                alert("Error, enter a valid deposit amount");
              }
            } else {
              alert("Please put enter your name");
            }
        }
    },
    depositAmount: function () {
        let self = this;
        return function () { 
            if (owner) {
              let amount = prompt("How much do you want to deposit?");
      
              if (numRegex.test(amount)) {
                balance += Number(amount);
                self.getBalance();
              } else {
                alert("Error, enter a valid deposit amount");
              }
            } else {
              alert("Please put enter your name");
            }
        }
    },
    getOwnerName: function () {
      owner = prompt("Please enter your name: ");
      if (owner) {
        outputDiv.innerHTML = `Hello! ${owner} <br> <br> Balance: ${balance}`;
        return owner;
      }
    },
  };
};

let bOwner = document.getElementById("ownerName");
let bDeposit = document.getElementById("deposit");
let bWithdrawal = document.getElementById("withdrawal");
let outputDiv = document.getElementById("outputDiv");

let bAccount = bankAccount(); 

bOwner.onclick = bAccount.getOwnerName;

//bOwner.addEventListener("click", bAccount.getOwnerName()); 

bDeposit.addEventListener("click", bAccount.depositAmount())

bWithdrawal.addEventListener("click", bAccount.withdrawalAmount()); 


