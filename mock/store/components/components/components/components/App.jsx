import { useStore } from "./store/useStore";
import LoginModal from "./components/LoginModal";
import Dashboard from "./components/Dashboard";

export default function App() {
  const { user } = useStore();
  return (
    <div className="app">
      {!user && <LoginModal />}
      {user && <Dashboard />}
    </div>
  );
}
