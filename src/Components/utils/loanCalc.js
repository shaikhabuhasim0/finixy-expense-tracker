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