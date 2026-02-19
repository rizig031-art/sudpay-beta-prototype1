import { useState } from "react";
import { useStore } from "../store/useStore";

export default function LoginModal() {
  const [name, setName] = useState("");
  const { login } = useStore();

  const handleLogin = () => { if(name.trim()) login(name); }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Login to SudPay</h2>
        <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
