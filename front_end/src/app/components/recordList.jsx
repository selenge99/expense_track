import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
// import { apiUrl } from "../utils/util";
import axios from "axios";

const RecordList = () => {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/records`);
      console.log("DD", res.data.records);
      setTransactions(res.data.records);
    } catch (error) {
      console.error(error);
      //   toast.error("Failed to fetch transactions");
    }
  };
  useEffect(() => {
    fetchTransactions();
  }, [user]);
  return (
    <div>
      {transactions?.map((tr) => (
        <div className="flex justify-between items-center px-6 py-5 border-b-[1px] border-[#E5E7EB] bg-white w-full">
          <div className="flex gap-4 w-full">
            <img src="./group.png" alt="income" />
            <div>
              <p className="text-base">{tr?.name}</p>
              <p className="text-xs text-[#6B7280]">{tr?.created_at}</p>
            </div>
          </div>
          <div
            className={`${
              tr.transaction_type === "EXP" ? "text-red-500" : "text-green-500"
            }`}
          >
            {tr.transaction_type === "EXP" && "-"}
            {tr?.amount}₮
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecordList;
