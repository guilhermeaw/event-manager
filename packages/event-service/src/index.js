import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({message: 'event-service working'});
});

app.listen(3001, () => {
  console.log('event-service up!');
});
