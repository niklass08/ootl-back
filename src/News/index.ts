export default class News {
  title: string;
  sourceName: string;
  abstract: string;
  content: string;
  url: string;

  constructor({
    title,
    sourceName,
    abstract,
    content,
    url
  }: {
    title: string;
    sourceName: string;
    abstract: string;
    content: string;
    url: string;
  }) {
    this.title = title;
    this.sourceName = sourceName;
    this.abstract = abstract;
    this.content = content;
    this.url = url;
  }
}
