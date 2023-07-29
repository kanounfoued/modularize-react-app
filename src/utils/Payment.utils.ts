import { PaymentStrategy } from "../interfaces/PaymentStrategy";

export const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  strategy: PaymentStrategy
) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${strategy.getCurrencySign()}${tip} to charity.`;
};

export const formatButtonLabel = (strategy: PaymentStrategy, total: number) => {
  return `${strategy.getCurrencySign()}${total}`;
};
