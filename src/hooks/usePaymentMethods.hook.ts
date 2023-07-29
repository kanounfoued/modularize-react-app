import { useEffect, useState } from "react";
import PaymentMethod from "../models/PaymentMethod.model";
import { RemotePaymentMethods } from "../types/Payment";

function convertPaymentMethods(
  paymentMethods: RemotePaymentMethods[]
): PaymentMethod[] {
  if (paymentMethods.length === 0) return [];

  const extended: PaymentMethod[] = paymentMethods.map((method) => {
    return new PaymentMethod(method);
  });

  extended.push(
    new PaymentMethod({
      bank_name: "cash",
      account_number: "cash",
    })
  );

  return extended;
}

export default function usePaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    async function fetchPaymentMethods() {
      const url = `https://random-data-api.com/api/v2/banks?size=3`;

      const response = await fetch(url);
      const methods = await response.json();

      const extended = convertPaymentMethods(methods);
      setPaymentMethods(extended);
    }

    fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
  };
}
