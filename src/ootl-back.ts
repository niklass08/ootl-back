import express from 'express';
import config from './config';
import cors from 'cors';
//Routes
import news from './routes/news';

const app = express();
app.use(cors());

app.use('/news', news);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
