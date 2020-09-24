import News from '../News';
import { NewsApiArticle } from '../api/newsApi';

export const mapNewsApiResponseToNews = (
  newsApiResponse: NewsApiArticle
): News => {
  const sourceRegex = / -.*/g;
  return new News({
    title: newsApiResponse.title.replace(sourceRegex, '.'),
    abstract: newsApiResponse.description,
    content: newsApiResponse.content,
    sourceName: newsApiResponse.source.name
  });
};
