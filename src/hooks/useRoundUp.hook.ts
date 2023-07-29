import { useMemo, useState } from "react";
import { PaymentStrategy } from "../interfaces/PaymentStrategy";

export default function useRoundUp(amount: number, strategy: PaymentStrategy) {
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

  const { total, tip } = useMemo(
    () => ({
      total: agreeToDonate ? strategy.getRoundUpAmount(amount) : amount,
      tip: strategy.getTip(amount),
    }),
    [amount, agreeToDonate, strategy]
  );

  console.log(total, tip);

  const updateAgreeToDonate = () => {
    setAgreeToDonate((agreeToDonate: boolean) => !agreeToDonate);
  };

  return {
    total,
    tip,
    agreeToDonate,
    updateAgreeToDonate,
  };
}
