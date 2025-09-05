import readline from 'readline';
import { questionPool, Option } from './questions';
import { simpleHash } from './utils';
import { fetchPokemon } from './fetchPokemon';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (q: string): Promise<string> => {
  return new Promise((resolve) => rl.question(q, resolve));
};

const calculateDexNumber = (scores: Record<string, number>): number => {
  const personalityStr = Object.entries(scores)
    .map(([key, val]) => `${key}${val}`)
    .join('');
  const hash = (simpleHash(personalityStr) % 1025) + 1;
  return hash;
};

const runQuiz = async () => {
  const scores: Record<string, number> = {};

  for (const q of questionPool) {
    let answer: string;
    let option!: Option;

    while (true) {
      const optionsText = q.options
        .map((option, i) => `${i + 1}. ${option.label}`)
        .join('\n');

      answer = await ask(`${q.text}\n${optionsText}\n`);

      const choice = parseInt(answer, 10);
      if (!isNaN(choice) && choice >= 1 && choice <= q.options.length) {
        option = q.options[choice - 1]!;
        break;
      } else {
        console.log(
          'Pikaka! Invalid input, please enter a number from the list pika!\n'
        );
      }
    }

    console.log(`> ${option.label}`);
    scores[option.trait] = (scores[option.trait] || 0) + option?.value;
  }

  console.log('Quiz finished!');
  const dexNumber = calculateDexNumber(scores);
  const pokemon = await fetchPokemon(dexNumber);
  console.log(`Your response summoned Pokemon #${pokemon.id}: ${pokemon.name}`);
  console.log(`Type: ${pokemon.types.join(' / ')}`);
  console.log(`Sprite: ${pokemon.sprite}`);
  rl.close();
};

runQuiz();
