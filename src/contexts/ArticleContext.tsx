import React, { createContext, useEffect, useState } from 'react';

interface Article {
  id: string;
  title: string;
  category: string;
  description: string;
}

interface FilterValues {
  categories: string[];
  search: string;
}

export interface ArticleProps {
  articles: Article[];
  // eslint-disable-next-line
  setFilter: (e: FilterValues) => any | Promise<any>;
}

export const ArticleContext = createContext({} as ArticleProps);

// eslint-disable-next-line
const jsonToFilter = (object: Object) => {
  let filter = '';
  Object.entries(object).map(([key, value]) => {
    if (!value.length) return null;

    if (Array.isArray(value)) {
      filter = `?${key}=${value.join(',')}`;
    } else {
      filter = `?${key}=${value}`;
    }

    return null;
  });
  return filter;
};

export function ArticleProvider({
  children,
  initialArticles,
}: {
  children: React.ReactNode;
  initialArticles: Article[];
}): JSX.Element {
  const [articles, setArticles] = useState(initialArticles as Article[]);
  const [filter, setFilter] = useState({} as FilterValues);

  useEffect(() => {
    if (JSON.stringify(filter) !== '{}') {
      const path = jsonToFilter(filter);
      console.log(path);
      // todo: implement backend call
      setArticles([]);
    }
  }, [filter]);

  return (
    // eslint-disable-next-line
    <ArticleContext.Provider value={{ articles, setFilter }}>
      {children}
    </ArticleContext.Provider>
  );
}
