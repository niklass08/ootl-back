import express from 'express';
import constants from '../constants';
import NewsAPI from 'newsapi';
import { NewsApiArticle, NewsApiResponse } from '../api/newsApi';
import { mapNewsApiResponseToNews } from '../mappers/newsApiToNews';
import News from '../News';
import config from '../config';

const newsAPI = new NewsAPI(config.api.newsApi.key);
const router = express.Router();

router.get('/', (req, res) => {
  res.send('News Route');
});

const getRandomTopic = () => {
  const topics = Object.keys(constants.topics);
  return topics[Math.floor(Math.random() * topics.length)];
};

const requestRandomFreshNews = async (): Promise<News> => {
  const topic = getRandomTopic();
  const response: NewsApiResponse = await newsAPI.v2.topHeadlines({
    category: topic,
    country: 'fr'
  });
  const news: News[] = response.articles.map(mapNewsApiResponseToNews);
  return news[Math.floor(Math.random() * news.length)];
};

router.get('/randomFreshNews', async (req, res) => {
  const news = await requestRandomFreshNews();
  res.send(news);
});
export default router;
