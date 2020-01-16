export interface movieType {
  id: string;
  metaDescription: string;
  metaImage: {
    alt: string;
    url: string;
  };
  movieTypes: {
    [key: string]: boolean;
  };
  path: string;
  title: string;
}
