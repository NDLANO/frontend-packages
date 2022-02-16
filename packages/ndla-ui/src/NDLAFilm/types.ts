export interface MovieType {
  id: string;
  metaDescription: string;
  resourceTypes: MovieResourceType[];
  metaImage: {
    alt: string;
    url: string;
  };
  path: string;
  title: string;
}

export interface MovieResourceType {
  id: string;
  name: string;
}
