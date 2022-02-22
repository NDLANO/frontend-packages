export interface MovieType {
  id: number | string;
  metaDescription: string;
  resourceTypes: MovieResourceType[];
  metaImage?: {
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
