interface NewsApiArticle {
  source: { id?: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsApiArticle[];
}

export { NewsApiArticle, NewsApiResponse };
