import {showTransactions,withdraw,deposit,checkBalance} from "./bank.js"

deposit(1, 1500);
checkBalance(1)
withdraw(1, 100);
checkBalance(1);
showTransactions(1);
