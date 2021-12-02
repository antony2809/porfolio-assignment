import { random } from '../random';

export const names = [
  'Investment Account',
  'Personal Loan Account',
  'Credit Card Account',
  'Auto Loan Account',
  'Checking Account',
  'Home Loan Account',
  'Money Market Account',
  'Savings Account',
];
export const generateName = () => {
  const idx = random(0, names.length - 1);
  return names[idx];
};
