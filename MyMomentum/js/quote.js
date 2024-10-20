const quotes = [
  {
    quote: `I can't change the direction of the wind, but I can adjust my sails to always reach my destination.`,
    author: `Jimmy Dean`,
  },
  {
    quote: `Don't judge each day by the harvest you reap but by the seeds that you plant.`,
    author: `Robert Louis Stevenson`,
  },
  {
    quote: `Believe you can and you're halfway there.`,
    author: `Theodore Roosevelt`,
  },
  {
    quote: `Two roads diverged in a wood and I - I took the one less traveled by, and that has made all the difference.`,
    author: `Robert Frost`,
  },
  {
    quote: `A champion is someone who gets up when he can't.`,
    author: `Jack Dempsey`,
  },
  {
    quote: `Nothing is impossible, the word itself says 'I'm possible'!`,
    author: `Audrey Hepburn`,
  },
  {
    quote: `Keep your face always toward the sunshine - and shadows will fall behind you.`,
    author: `Walt Whitman`,
  },
  {
    quote: `The best preparation for tomorrow is doing your best today.`,
    author: `H. Jackson Brown, Jr.`,
  },
  {
    quote: `Perfection is not attainable, but if we chase perfection we can catch excellence.`,
    author: `Vince Lombardi`,
  },
  {
    quote: `The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.`,
    author: `Helen Keller`,
  },
];



const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

$quote.textContent = todaysQuote['quote'];
$author.textContent = todaysQuote['author'];
