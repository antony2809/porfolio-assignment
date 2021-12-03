import { random } from '../random';
import { Account, AccountHistory, AccountType } from '@portfolio/models';
import { v4 } from 'uuid';
import { generateName } from '../generate-name';
import sub from 'date-fns/sub';

interface GeneratedAccount {
  account: Account;
  history: AccountHistory[];
}

export const generateAccount = (): GeneratedAccount => {
  const min = random(350, 520);
  const max = random(680, 1200);
  const goal = (min + max) * 2;
  const days = random(35, 180);

  const today = new Date();

  return {
    account: {
      id: v4(),
      goal,
      name: generateName(),
      accountType: random(AccountType.Personal, AccountType.Shared),
    },
    history: [...Array(days).keys()].map((_, idx) => ({
      id: v4(),
      value: random(min + idx, max),
      created: sub(today, { days: days - idx }),
    })),
  };
};
