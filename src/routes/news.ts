import express from 'express';
import constants from '../constants';
import NewsAPI from 'newsapi';

const newsapi = new NewsAPI('d4d95eab588746b5bf5dcdb55f7e4259');
const router = express.Router();
router.get('/', (req, res) => {
  res.send('News Route');
});

const getRandomTopic = () => {
  const topics = Object.keys(constants.topics);
  return topics[Math.floor(Math.random() * topics.length)];
};

const requestRandomFreshNews = async () => {
  const topic = getRandomTopic();
  const response = await newsapi.v2.topHeadlines({
    category: topic,
    country: 'fr'
  });
  return response;
};

router.get('/randomFreshNews', async (req, res) => {
  const news = await requestRandomFreshNews();
  res.send(news);
});
export default router;
