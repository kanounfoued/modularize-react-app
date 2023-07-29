import { useState } from "react";
import {
  PaymentStrategy,
  PaymentStrategyAU,
  PaymentStrategyJap,
} from "../interfaces/PaymentStrategy";
import Payment from "./Payment";

function App() {
  const [strategy, setStrategy] = useState<PaymentStrategy>(
    new PaymentStrategyAU()
  );

  return (
    <div className="App">
      <button onClick={() => setStrategy(new PaymentStrategyAU())}>AU</button>
      <button onClick={() => setStrategy(new PaymentStrategyJap())}>JAP</button>
      <Payment amount={19.8} strategy={strategy} />
    </div>
  );
}

export default App;
