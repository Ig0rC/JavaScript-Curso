import app from './app';

const port = 3002;

app.listen(port, () => {
  console.log('Open port 3001');
  console.log(`http://localhost${port}`);
});
