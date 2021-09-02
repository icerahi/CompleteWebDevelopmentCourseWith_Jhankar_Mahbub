/* const bank = owner =>{
    balance =0;
    return amount => balance+=amount 
} */

const bank = owner =>{
    balance =0;
    return {
        deposit:amount => balance+=amount ,
        withdraw: amount => balance-=amount,
    }
}

const MofijBank = bank('Mofiz')
console.log(MofijBank.deposit(1000));
console.log(MofijBank.withdraw(500));
