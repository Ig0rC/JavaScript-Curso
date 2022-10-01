import app from './app';

const port = 3002;

app.listen(port, () => {
  console.log('Open port ', port);
  console.log(`http://localhost${port}`);
});
