export interface CheckTransactionPayload {
  id: string;
  voucher: string;
  voucherImg?: string;
}

export interface CreateTransactionPayload {
  market: string;
  amount: number;
  originCountryBankId: string;
  destinationWalletId: string;
  originOfFundsId: string;
}

export type Currency = 'USD' | 'PEN'
export type Cryptocurrency = 'BTC' | 'ETH'
export type ExchangeCurrencyAndCrypto = `${Currency}-${Cryptocurrency}`