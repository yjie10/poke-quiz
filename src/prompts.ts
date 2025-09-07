import { Interface } from 'readline';
import { mapLuckyNumberToTerastalType } from './utils';

export const ask = (rl: Interface, q: string): Promise<string> => {
  return new Promise((resolve) => rl.question(q, resolve));
};

export const getUserTerastalType = async (rl: Interface): Promise<string> => {
  while (true) {
    const luckyNumberInput = await ask(
      rl,
      'Pick a lucky number between 0 and 9999 to determine your Terastal type!\n'
    );
    const luckyNumber = parseInt(luckyNumberInput, 10);

    if (
      !isNaN(luckyNumber) &&
      Math.abs(luckyNumber) >= 1 &&
      Math.abs(luckyNumber) <= 9999
    ) {
      return mapLuckyNumberToTerastalType(luckyNumber);
    } else {
      console.log(
        'Pikaka! Invalid input, please enter a valid number from 0 to 9999 pika!'
      );
    }
  }
};
