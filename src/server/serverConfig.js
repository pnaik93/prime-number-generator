import express from 'express';
import path from 'path';
const app = express();
const port = 3000;

import getAllPrimeNumbersInRange from './app';

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + './../../public/index.html')));

app.get('/primenumbers/:start/:end', (req, res) => {
	const result = getAllPrimeNumbersInRange(
		parseInt(req.params.start),
		parseInt(req.params.end)
	);
	res.json(result);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
