import { CountryPayments } from "../models/CountryPayment.model";

export const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  strategy: CountryPayments
) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${strategy.currencySign}${tip} to charity.`;
};

export const formatButtonLabel = (strategy: CountryPayments, total: number) => {
  return `${strategy.currencySign}${total}`;
};
