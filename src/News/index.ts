export default class News {
  title: string;
  sourceName: string;
  abstract: string;
  content: string;

  constructor({
    title,
    sourceName,
    abstract,
    content
  }: {
    title: string;
    sourceName: string;
    abstract: string;
    content: string;
  }) {
    this.title = title;
    this.sourceName = sourceName;
    this.abstract = abstract;
    this.content = content;
  }
}
