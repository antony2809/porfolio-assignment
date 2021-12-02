export enum AccountType {
  Personal,
  Shared,
}

export interface Account {
  id: string;
  name: string;
  accountType: AccountType;
  goal: number;
}
