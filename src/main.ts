import readline from 'readline';
import { ask, getUserTerastalType } from './prompts';
import { questionPool, Option, Question } from './questions';
import { calculateDexNumber } from './utils';
import { fetchPokemon } from './fetchPokemon';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getRandomQuestions = (count: number): Question[] => {
  return [...questionPool].sort(() => Math.random() - 0.5).slice(0, count);
};

const runQuiz = async () => {
  const scores: Record<string, number> = {};
  const selectedQuestions = getRandomQuestions(5);

  for (const q of selectedQuestions) {
    let answer: string;
    let option!: Option;

    while (true) {
      const optionsText = q.options
        .map((option, i) => `${i + 1}. ${option.label}`)
        .join('\n');

      answer = await ask(rl, `${q.text}\n${optionsText}\n`);

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

  const teraType = await getUserTerastalType(rl);
  const dexNumber = calculateDexNumber(scores);
  const pokemon = await fetchPokemon(dexNumber);

  console.log('Quiz finished!');

  console.log('\n' + '='.repeat(50));
  console.log(`🎉 Your Pokémon Profile 🎉`);
  console.log('-'.repeat(50));
  console.log(`✨ #${pokemon.id}: ${pokemon.name}`);
  console.log(`🌀 Type: ${pokemon.types.join(' / ')}`);
  console.log(`🖼️  Sprite: ${pokemon.sprite}`);
  console.log(`💎 Terastal Type: ${teraType}`);
  console.log('='.repeat(50) + '\n');

  rl.close();
};

runQuiz();
