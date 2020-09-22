import News from '../News';
import { NewsApiArticle } from '../api/newsApi';

export const mapNewsApiResponseToNews = (
  newsApiResponse: NewsApiArticle
): News => {
  return new News({
    title: newsApiResponse.title,
    abstract: newsApiResponse.description,
    content: newsApiResponse.content,
    sourceName: newsApiResponse.source.name
  });
};
