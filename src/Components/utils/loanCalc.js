// functions to use in various rots 
export function getTotalPaid(formhistory) {
  return formhistory.reduce((total, item) => {
    return total + (Number(item.amountreceived) || 0);
  }, 0);
}

export function getTotalRemaining(formhistory) {
  return formhistory.reduce((total, item) => {
    const interest = (Number(item.totalamount) * Number(item.intrestrate)) / 100;
    const totalLoanAmount = Number(item.totalamount) + interest;
    const paid = Number(item.amountreceived) || 0;
    return total + totalLoanAmount - paid;
  }, 0);
}

export function gettotalIncome(history){
  return history
  .filter((item) => item.type === "income")
  .reduce((total, item) => total + Number(item.amount), 0);
}

export function gettotalExpense (history){
  return history 
  .filter((item) => item.type === "expense")
  .reduce((total, item) => total + Number(item.amount), 0);
}


// total paid amount 
export function gettotalPaid1 (formhistory){
  return formhistory.reduce((total, item) => {
  return total + (Number(item.amountreceived) || 0);
}, 0);
}

// total remaining  amount 
export function gettotalremainingamount (formhistory){
  return formhistory.reduce((total, item) => {

  const interest =
    (Number(item.totalamount) * Number(item.intrestrate)) / 100;

  const totalLoanAmount =
    Number(item.totalamount) + interest;

  const paid =
    Number(item.amountreceived) || 0;

  return total + totalLoanAmount - paid;

}, 0);
}

export function gettotalAmount (){
  return   Number(form.totalamount) +
  interest -
  (Number(form.amountreceived) || 0);
}

export function getremainingamount (){
  return Number(gettotalAmount) || 0 ;
}

// start 
export function getLoanRemaining(loan) {
  const interest =
    (Number(loan.totalamount) * Number(loan.intrestrate)) / 100;

  const totalLoanAmount =
    Number(loan.totalamount) + interest;

  const paid = Number(loan.amountreceived) || 0;

  return Math.max(0, totalLoanAmount - paid);
}

export function getallpaidloans (){
  return filteredLoans.filter((loan) => {
          return getLoanRemaining(loan) === 0;
      });
}

export function getallunpaidloans (){
  return filteredLoans.filter((loan) => {
          return getLoanRemaining(loan) > 1;
      });
}


// (income - expense) / income * 100 formula !! 