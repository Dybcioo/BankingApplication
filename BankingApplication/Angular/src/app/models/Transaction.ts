export default class Transaction {
  id: number;
  accountId: number;
  operationKindId: number;
  title: string;
  amount: number;
  date: Date;
  toAccountNumber: string;
  description: string;
  direction: number;
}
