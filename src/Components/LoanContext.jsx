// !!!! not for use !!!

import React, { createContext, useContext, useState, useEffect } from "react";

const LoanContext = createContext();

export function LoanProvider({ children }) {
  const [formhistory, setFormhistory] = useState(
    () => JSON.parse(localStorage.getItem("formhistory")) || []
  );
  const [totalAmount, setTotalAmount] = useState(
    () => localStorage.getItem("totalAmount") || 0
  );

  useEffect(() => {
    localStorage.setItem("formhistory", JSON.stringify(formhistory));
  }, [formhistory]);

  useEffect(() => {
    localStorage.setItem("totalAmount", totalAmount);
  }, [totalAmount]);

  // tumhare dono calculations, bilkul same logic
  const totalPaid = formhistory.reduce((total, item) => {
    return total + (Number(item.amountreceived) || 0);
  }, 0);

  const remainingamount = Number(totalAmount) || 0;

  return (
    <LoanContext.Provider
      value={{
        formhistory,
        setFormhistory,
        totalAmount,
        setTotalAmount,
        totalPaid,
        remainingamount,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
}

export const useLoan = () => useContext(LoanContext);