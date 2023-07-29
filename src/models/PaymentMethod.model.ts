import { RemotePaymentMethods } from "../types/Payment";

// Domain Object
export default class PaymentMethod {
  private remotePaymentMethods: RemotePaymentMethods;

  constructor(remotePaymentMethods: RemotePaymentMethods) {
    this.remotePaymentMethods = remotePaymentMethods;
  }

  // provider is the account number (I am fetching another type of data here)
  get provider() {
    return this.remotePaymentMethods.account_number;
  }

  get label() {
    if (this.remotePaymentMethods.account_number === "cash") {
      return `Pay in ${this.remotePaymentMethods.account_number}`;
    }

    return `Pay with ${this.remotePaymentMethods.account_number}`;
  }

  get isDefaultMethod() {
    return this.remotePaymentMethods.account_number === "cash";
  }
}
