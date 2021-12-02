import { random } from '../random';
import { finance } from 'faker';
import { Account, AccountHistory, AccountType } from '@portfolio/models';
import { v4 } from 'uuid';

interface GeneratedAccount {
  account: Account;
  history: AccountHistory[];
}

export const generateAccount = (): GeneratedAccount => {
  const min = random(350, 520);
  const max = random(680, 1200);
  const goal = (min + max) * 2;
  const days = random(180, 365);

  return {
    account: {
      id: v4(),
      goal,
      name: finance.accountName(),
      accountType: random(AccountType.Personal, AccountType.Shared),
    },
    history: [...Array(days).keys()].map(() => ({ id: v4(), value: random(min, max) })),
  };
};
