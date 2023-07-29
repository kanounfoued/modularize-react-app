// import { PaymentStrategy } from "../interfaces/PaymentStrategy";

export class CountryPayments {
  private readonly _currencySign: string;
  private readonly algorithm: Function;

  constructor(currencySign: string, algorithm: Function) {
    this._currencySign = currencySign;
    this.algorithm = algorithm;
  }

  get currencySign(): string {
    return this._currencySign;
  }

  getRoundUpAmount(amount: number): number {
    return this.algorithm(amount);
  }

  getTip(amount: number): number {
    return this.calculateTipFor(this.getRoundUpAmount.bind(this))(amount);
  }

  calculateTipFor(
    roundUpAmount: (amount: number) => number
  ): (amount: number) => number {
    return (amount: number) =>
      parseFloat((roundUpAmount(amount) - amount).toPrecision(10));
  }
}
