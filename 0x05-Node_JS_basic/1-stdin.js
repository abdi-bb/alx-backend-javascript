console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const name = String(input).trim();

  if (name) {
    console.log(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
