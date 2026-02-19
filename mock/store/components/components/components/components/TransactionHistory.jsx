import { useStore } from "../store/useStore";

export default function TransactionHistory() {
  const { transactions } = useStore();
  return (
    <div className="transactions">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map(tx=>(
          <li key={tx.id}>{tx.date}: {tx.type} {tx.amount} SDG via {tx.method}</li>
        ))}
      </ul>
    </div>
  );
}
