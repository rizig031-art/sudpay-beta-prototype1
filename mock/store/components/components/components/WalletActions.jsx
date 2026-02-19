import { useState } from "react";
import { useStore } from "../store/useStore";
import { banks, telecoms } from "../mock/mockData";

export default function WalletActions() {
  const { addTransaction, selectedBank, selectBank, selectedTelecom, selectTelecom } = useStore();
  const [modal, setModal] = useState(null);
  const [input, setInput] = useState("");

  const handleAction = (type) => {
    setModal(type);
    setInput("");
  };

  const executeAction = () => {
    const amount = Math.floor(Math.random()*5000 + 500);
    addTransaction({ id: Date.now(), type: modal==="Transfer"?"Payment":modal, amount, method: modal==="Recharge"?selectedTelecom:selectedBank, date: new Date().toLocaleString() });
    setModal(null);
  };

  return (
    <div className="wallet-actions">
      <button onClick={()=>handleAction("Transfer")}>Transfer SudPay</button>
      <button onClick={()=>handleAction("Electricity")}>Buy Electricity</button>
      <button onClick={()=>handleAction("Recharge")}>Buy Credit</button>
      <button onClick={()=>handleAction("Bank")}>Transfer to Bank</button>
      <button onClick={()=>handleAction("Wallet")}>Wallet</button>

      {modal && (
        <div className="modal-backdrop">
          <div className="modal">
            {modal==="Recharge" && (
              <>
                <select value={selectedTelecom} onChange={e=>selectTelecom(e.target.value)}>
                  {telecoms.map(t=><option key={t}>{t}</option>)}
                </select>
                <input placeholder="Phone number" value={input} onChange={e=>setInput(e.target.value)} />
              </>
            )}
            {(modal==="Transfer" || modal==="Bank" || modal==="Electricity" || modal==="Wallet") && (
              <input placeholder={modal==="Transfer"?"SudPay account":modal==="Bank"?"Bank account":modal==="Electricity"?"Meter number":"Wallet account"} value={input} onChange={e=>setInput(e.target.value)} />
            )}
            <button onClick={executeAction}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
