import express from 'express';
import config from './config';

//Routes
import news from './routes/news';

const app = express();

app.use('/news', news);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
