export interface PaymentStrategy {
  getRoundUpAmount(amount: number): number;

  getTip(amount: number): number;

  getCurrencySign(): string;
}

export class PaymentStrategyAU implements PaymentStrategy {
  getCurrencySign(): string {
    return "$";
  }

  getRoundUpAmount(amount: number): number {
    return Math.floor(amount + 1);
  }

  getTip(amount: number): number {
    return parseFloat((this.getRoundUpAmount(amount) - amount).toPrecision(10));
  }
}

export class PaymentStrategyJap implements PaymentStrategy {
  getCurrencySign(): string {
    return "¥";
  }

  getRoundUpAmount(amount: number): number {
    return Math.floor(amount + 1);
  }

  getTip(amount: number): number {
    return (
      parseFloat((this.getRoundUpAmount(amount) - amount).toPrecision(10)) * 100
    );
  }
}
