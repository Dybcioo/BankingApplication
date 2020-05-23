export default class Transaction {
  id: number;
  accountId: number;
  operationKindId: number;
  amount: number;
  date: Date;
  toAccountNumber: string;
  description: string;
  direction: number;
}
