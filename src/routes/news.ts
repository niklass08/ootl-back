import express from 'express';
import constants from '../constants';
import NewsAPI from 'newsapi';
import { NewsApiArticle, NewsApiResponse } from '../api/newsApi';
import { mapNewsApiResponseToNews } from '../mappers/newsApiToNews';
import News from '../News';
import config from '../config';
import NodeCache from 'node-cache';
const NEWS_KEY = 'NEWS';

const newsCache = new NodeCache();

const newsAPI = new NewsAPI(config.api.newsApi.key);
const router = express.Router();

router.get('/', (req, res) => {
  res.send('News Route');
});

const getTopicNews = async (topic: string): Promise<News[]> => {
  const response: NewsApiResponse = await newsAPI.v2.topHeadlines({
    category: topic,
    country: 'fr'
  });
  return response.articles.map(mapNewsApiResponseToNews);
};

const getNews = async (): Promise<News[]> => {
  let news: News[] = [];
  for (const topic of Object.keys(constants.topics)) {
    const topicNews = await getTopicNews(topic);
    news = news.concat(topicNews);
  }
  return news;
};
const requestRandomFreshNews = async (): Promise<News> => {
  let news = newsCache.get(NEWS_KEY) as News[];
  if (news) {
    console.log('returning cached data');
    return news[Math.floor(Math.random() * news.length)];
  }
  news = await getNews();
  newsCache.set(NEWS_KEY, news, 60 * 60);
  console.log('returning fresh data');
  return news[Math.floor(Math.random() * news.length)];
};

router.get('/randomFreshNews', async (req, res) => {
  const news = await requestRandomFreshNews();
  res.send(news);
});
export default router;
