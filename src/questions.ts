export type Option = {
  label: string;
  trait: string;
  value: number;
};

export type Question = {
  id: string;
  text: string;
  options: Option[];
};

export const questionPool: Question[] = [
  {
    id: 'q1',
    text: 'Which environment feels most like home to you?',
    options: [
      { label: 'Sunny beach', trait: 'bold', value: 2 },
      { label: 'Quiet forest', trait: 'bashful', value: 2 },
      { label: 'Bustling city', trait: 'timid', value: 2 },
      { label: 'Mountain peak', trait: 'brave', value: 2 },
    ],
  },
  {
    id: 'q2',
    text: 'When faced with a new challenge, how do you react?',
    options: [
      { label: 'Jump right in!', trait: 'brave', value: 3 },
      { label: 'Plan carefully first', trait: 'calm', value: 3 },
      { label: 'Ask friends for help', trait: 'gentle', value: 3 },
      { label: 'Wait and see what happens', trait: 'relaxed', value: 3 },
    ],
  },
  {
    id: 'q3',
    text: 'Pick a favorite snack:',
    options: [
      { label: 'Spicy chips', trait: 'rash', value: 1 },
      { label: 'Sweet candy', trait: 'naive', value: 1 },
      { label: 'Salty pretzels', trait: 'serious', value: 1 },
      { label: 'Fresh fruit', trait: 'gentle', value: 1 },
    ],
  },
  {
    id: 'q4',
    text: 'Which word best describes you?',
    options: [
      { label: 'Curious', trait: 'quirky', value: 2 },
      { label: 'Determined', trait: 'hardy', value: 2 },
      { label: 'Cheerful', trait: 'jolly', value: 2 },
      { label: 'Calm', trait: 'docile', value: 2 },
    ],
  },
  {
    id: 'q5',
    text: 'What kind of Pokémon partner would you want?',
    options: [
      { label: 'Cute and loyal', trait: 'gentle', value: 4 },
      { label: 'Strong and fierce', trait: 'adamant', value: 4 },
      { label: 'Smart and mysterious', trait: 'quiet', value: 4 },
      { label: 'Playful and energetic', trait: 'jolly', value: 4 },
    ],
  },
];
