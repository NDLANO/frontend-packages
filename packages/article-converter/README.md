# Article-converter

Converts NDLA articles created in [ed.ndla.no](https://ed.ndla.no) into a React tree.

## Installation

```sh
yarn add @ndla/article-converter
```

## Why is this package needed?

Articles rendered on [NDLA.no](https://ndla.no) can contain different embeds, each having their own data requirements. In order to keep embed data fresh, it is fetched directly from its source instead of being embedded within the stored article. As such, a transformation process is required.

In order to allow for flexibility in how and when an article is transformed, the process has been split up into several different steps:

1. An article is created in our CMS, Editorial. The content is stored in a database. Embeds are stored as custom `<ndlaembed />` html elements.
2. A web application fetches an article through our [GraphQL api](https://api.ndla.no/graphql). GraphQL fetches the article from the database, extracts the `<ndlaembed />` tags and fetches the required embed metadata. The metadata is then serialized and stored in a `data-json` attribute on the `<ndlaembed>`.
3. The web application receives a response from GraphQL, and calls `transform` from the `@ndla/article-converter` package.
4. The `@ndla/article-converter` package transforms the HTML string into React Elements, and applies a series of transformations to further transform the article. It returns a valid React tree.

## Functions

This package exports two functions that allows one to transform NDLA content to React nodes.

- **transform**: Accepts an entire NDLA article string that has been passed through GraphQL, and returns a React tree. Accepts the following transformation options:
  - **isOembed**: Adds `target="_blank"` to all links.
  - **subject**: Adds a specific subject context to the article.
  - **path**: The path to use for the rendered article.
  - **previewAlt**: Show visual previews of image alt texts.
  - **frontendDomain**: The frontend domain to use for generated links.
- **extractEmbedData**: Accepts a string containing a single `<ndlaembed>` element that has been passed through GraphQL. Returns a react tree.
