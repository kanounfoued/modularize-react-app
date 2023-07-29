import PaymentMethod from "../../../../models/PaymentMethod.model";

type PaymentMethodsProps = {
  paymentMethods: PaymentMethod[];
};

export default function PaymentMethods({
  paymentMethods,
}: PaymentMethodsProps) {
  return (
    <>
      {paymentMethods.map((method) => (
        <div key={method.provider}>
          <input
            type="radio"
            name="payment"
            value={method.provider}
            defaultChecked={method.isDefaultMethod}
          />
          <span>{method.label}</span>
        </div>
      ))}
    </>
  );
}
