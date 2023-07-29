import usePaymentMethods from "../../hooks/usePaymentMethods.hook";
import PaymentMethods from "./components/PaymentMethods";
import useRoundUp from "../../hooks/useRoundUp.hook";
import {
  formatButtonLabel,
  formatCheckboxLabel,
} from "../../utils/Payment.utils";
import DonationCheckbox from "./components/DonationCheckbox/DonationCheckbox";
import {
  PaymentStrategy,
  PaymentStrategyAU,
} from "../../interfaces/PaymentStrategy";

type PaymentProps = {
  amount: number;
  strategy?: PaymentStrategy;
};

export default function Payment({
  amount,
  strategy = new PaymentStrategyAU(),
}: PaymentProps) {
  const { paymentMethods } = usePaymentMethods();

  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(
    amount,
    strategy
  );

  return (
    <div>
      <h3>Payment</h3>
      <br />
      <br />
      <div>
        <PaymentMethods paymentMethods={paymentMethods} />
        <DonationCheckbox
          onChange={updateAgreeToDonate}
          checked={agreeToDonate}
          content={formatCheckboxLabel(agreeToDonate, tip, strategy)}
        />
      </div>
      <button>{formatButtonLabel(strategy, total)}</button>
    </div>
  );
}
