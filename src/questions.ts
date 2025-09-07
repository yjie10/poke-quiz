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
  {
    id: 'q6',
    text: "What's your ideal way to spend a free afternoon?",
    options: [
      { label: 'Reading in a quiet corner', trait: 'quiet', value: 3 },
      { label: 'Going on an adventure', trait: 'brave', value: 3 },
      { label: 'Hanging out with friends', trait: 'jolly', value: 3 },
      { label: 'Taking a nap', trait: 'relaxed', value: 3 },
    ],
  },
  {
    id: 'q7',
    text: 'How do you handle conflict?',
    options: [
      { label: 'Avoid it entirely', trait: 'timid', value: 2 },
      { label: 'Face it head-on', trait: 'adamant', value: 2 },
      { label: 'Try to understand all sides', trait: 'gentle', value: 2 },
      { label: 'Stay calm and logical', trait: 'calm', value: 2 },
    ],
  },
  {
    id: 'q8',
    text: 'Which of these pets would you want?',
    options: [
      { label: 'Wise old owl', trait: 'serious', value: 2 },
      { label: 'Playful puppy', trait: 'jolly', value: 2 },
      { label: 'Mysterious cat', trait: 'quiet', value: 2 },
      { label: 'Chill turtle', trait: 'relaxed', value: 2 },
    ],
  },
  {
    id: 'q9',
    text: "You're at a team project. What's your role?",
    options: [
      { label: 'Leader', trait: 'hardy', value: 3 },
      { label: 'Idea generator', trait: 'quirky', value: 3 },
      { label: 'Peacemaker', trait: 'gentle', value: 3 },
      { label: 'Background support', trait: 'docile', value: 3 },
    ],
  },
  {
    id: 'q10',
    text: 'Which aesthetic calls to you?',
    options: [
      { label: 'Urban cyberpunk', trait: 'rash', value: 2 },
      { label: 'Misty forest', trait: 'bashful', value: 2 },
      { label: 'Starry night', trait: 'calm', value: 2 },
      { label: 'Pastel cottagecore', trait: 'naive', value: 2 },
    ],
  },
  {
    id: 'q11',
    text: 'Choose a type of weather:',
    options: [
      { label: 'Clear skies', trait: 'hardy', value: 2 },
      { label: 'Thunderstorm', trait: 'rash', value: 2 },
      { label: 'Snowy and quiet', trait: 'quiet', value: 2 },
      { label: 'Rainy and cozy', trait: 'docile', value: 2 },
    ],
  },
  {
    id: 'q12',
    text: "What's your work style?",
    options: [
      { label: 'Steady and consistent', trait: 'serious', value: 3 },
      { label: 'Creative and chaotic', trait: 'quirky', value: 3 },
      { label: 'Fast and intense', trait: 'adamant', value: 3 },
      { label: 'Go-with-the-flow', trait: 'relaxed', value: 3 },
    ],
  },
  {
    id: 'q13',
    text: 'Which drink would you order?',
    options: [
      { label: 'Strong black coffee', trait: 'bold', value: 1 },
      { label: 'Herbal tea', trait: 'calm', value: 1 },
      { label: 'Fizzy soda', trait: 'jolly', value: 1 },
      { label: 'Fruit smoothie', trait: 'naive', value: 1 },
    ],
  },
  {
    id: 'q14',
    text: 'Your favorite time of day?',
    options: [
      { label: 'Sunrise', trait: 'gentle', value: 2 },
      { label: 'Noon', trait: 'brave', value: 2 },
      { label: 'Dusk', trait: 'bashful', value: 2 },
      { label: 'Midnight', trait: 'quiet', value: 2 },
    ],
  },
  {
    id: 'q15',
    text: "What's your response to surprises?",
    options: [
      { label: 'Bring it on!', trait: 'rash', value: 3 },
      { label: "Eh, I'll adapt", trait: 'relaxed', value: 3 },
      { label: 'Panic a little', trait: 'timid', value: 3 },
      { label: 'Try to stay calm', trait: 'calm', value: 3 },
    ],
  },
  {
    id: 'q16',
    text: 'Pick a favorite season:',
    options: [
      { label: 'Spring', trait: 'naive', value: 1 },
      { label: 'Summer', trait: 'bold', value: 1 },
      { label: 'Autumn', trait: 'serious', value: 1 },
      { label: 'Winter', trait: 'quiet', value: 1 },
    ],
  },
  {
    id: 'q17',
    text: 'Choose a hobby:',
    options: [
      { label: 'Painting', trait: 'bashful', value: 2 },
      { label: 'Sports', trait: 'adamant', value: 2 },
      { label: 'Writing', trait: 'docile', value: 2 },
      { label: 'Gaming', trait: 'quirky', value: 2 },
    ],
  },
  {
    id: 'q18',
    text: 'Which animal do you vibe with most?',
    options: [
      { label: 'Fox', trait: 'quirky', value: 3 },
      { label: 'Bear', trait: 'hardy', value: 3 },
      { label: 'Rabbit', trait: 'naive', value: 3 },
      { label: 'Owl', trait: 'serious', value: 3 },
    ],
  },
  {
    id: 'q19',
    text: 'You find a mysterious treasure box. What do you do?',
    options: [
      { label: 'Open it without hesitation', trait: 'rash', value: 3 },
      { label: 'Look around cautiously', trait: 'timid', value: 3 },
      { label: 'Ask a friend to try it', trait: 'gentle', value: 3 },
      { label: 'Leave it alone', trait: 'bashful', value: 3 },
    ],
  },
  {
    id: 'q20',
    text: 'What pace do you live your life at?',
    options: [
      { label: 'Fast and fiery', trait: 'rash', value: 4 },
      { label: 'Balanced and thoughtful', trait: 'docile', value: 4 },
      { label: 'Slow but steady', trait: 'relaxed', value: 4 },
      { label: 'Chaotic but fun', trait: 'quirky', value: 4 },
    ],
  },
];
